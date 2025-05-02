const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Settings = require('../models/Settings');

const generateReferralCode = () => Math.random().toString(36).substring(2, 8);

exports.register = async (req, res) => {
    const { name, email, password, referredBy } = req.body;

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

        res.status(201).json({ token, user: { name: newUser.name, email: newUser.email }, message: 'Registration successful', });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

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
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
