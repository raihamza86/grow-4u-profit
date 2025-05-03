const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Settings = require('../models/Settings');
const sendEmail = require('../utils/sendEmail');

const generateReferralCode = () => Math.random().toString(36).substring(2, 8);

exports.register = async (req, res) => {
    const { name, email, password, referredBy } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // valid for 10 min

    const settings = await Settings.findOne();
    const signupBonus = settings?.signupBonus || 200;
    const referralBonus = settings?.referralBonus || 100;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            referralCode: generateReferralCode(),
            referredBy: referredBy || null,
            otpCode: otp,
            otpExpiresAt: expiry,
            isVerified: false
        });

        await newUser.save();

        // ✅ Create wallet for new user
        await Wallet.create({
            user: newUser._id, balance: signupBonus, transactions: [{
                type: 'Earning',
                amount: signupBonus,
                notes: 'Signup Bonus - Welcome bonus for signing up'
            }]

        });

        // ✅ Handle referral bonus (if any)
        if (referredBy) {
            const referrer = await User.findOne({ referralCode: referredBy });
            if (referrer) {
                const refWallet = await Wallet.findOne({ user: referrer._id });
                if (refWallet) {
                    refWallet.balance += referralBonus;
                    refWallet.transactions.push({
                        type: 'Earning',
                        amount: referralBonus,
                        notes: `Referral Bonus - for referring ${email}`
                    });
                    await refWallet.save();
                }
            }
        }

        // ✅ Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        // ✅ Send OTP email
        await sendEmail(email, 'Verify Your Account', `
                    <h3>Welcome ${name},</h3>
                    <p>Your OTP is: <strong>${otp}</strong></p>
                    <p>This OTP will expire in 10 minutes.</p>
                `);

        res.status(201).json({ token, user: { name: newUser.name, email: newUser.email }, message: 'Registration successful', });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: 'User is already verified' });
        }

        if (
            user.otpCode !== otp ||
            !user.otpExpiresAt ||
            user.otpExpiresAt < new Date()
        ) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        user.isVerified = true;
        user.otpCode = null;
        user.otpExpiresAt = null;
        await user.save();

        return res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
    } catch (err) {
        console.error('OTP Verification Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        if (!user.isVerified) {
            return res.status(403).json({ message: 'Please verify your email before logging in.' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role || 'user' },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Set token in HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                role: user.role || 'user',
                verified: user.isVerified,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error });
    }
};

exports.sendResetOtp = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        user.otpCode = otp;
        user.otpExpiresAt = expiry;
        await user.save();

        await sendEmail(email, 'Reset Your Password', `
            <h3>Reset Password Request</h3>
            <p>Your OTP is: <strong>${otp}</strong></p>
            <p>This OTP will expire in 10 minutes.</p>
        `);

        res.status(200).json({ message: 'OTP sent to your email' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.verifyResetOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (!user.otpExpiresAt || user.otpExpiresAt < new Date()) {
            return res.status(400).json({ message: 'OTP expired' });
        }

        if (user.otpCode !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


exports.resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (!user.otpExpiresAt || user.otpExpiresAt < new Date()) {
            return res.status(400).json({ message: 'OTP expired' });
        }

        if (user.otpCode !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.otpCode = null;
        user.otpExpiresAt = null;

        await user.save();

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


