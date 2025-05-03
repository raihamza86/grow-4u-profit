const Subscription = require('../models/Subscription');
const User = require('../models/User');
const Wallet = require("../models/Wallet");
const sendEmail = require('../utils/sendEmail');

exports.getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find().populate('user', 'name email');
        res.status(200).json(subscriptions);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch subscriptions' });
    }
};

exports.getPendingSubscriptions = async (req, res) => {
    try {
        const pendingSubs = await Subscription.find({ paymentStatus: 'Pending' })
            .populate('user', 'name email') // Optional: Show user info
            .sort({ createdAt: -1 });

        res.status(200).json({ count: pendingSubs.length, subscriptions: pendingSubs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch pending subscriptions' });
    }
};

exports.verifySubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }

        if (subscription.paymentStatus === 'Paid') {
            return res.status(400).json({ message: 'Subscription already verified' });
        }

        subscription.paymentStatus = 'Paid';
        subscription.active = true;
        subscription.startDate = new Date();
        subscription.endDate = new Date(Date.now() + subscription.durationDays * 24 * 60 * 60 * 1000);

        await subscription.save();

        const user = await User.findById(req.user._id);

        await sendEmail(user.email, 'Subscription Approved', `
            <h3>Congratulations ${user.name},</h3>
            <p>Your subscription for <strong>${subscription.packageName}</strong> has been <strong>approved</strong>.</p>
          `);

        res.status(200).json({ message: 'Subscription verified and activated', subscription });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.rejectSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

        // Optionally allow admin to pass rejection reason
        const { rejectionNote } = req.body;

        subscription.paymentStatus = 'Rejected';
        subscription.active = false;
        subscription.rejectionNote = rejectionNote || 'Rejected by admin';
        await subscription.save();

        const user = await User.findById(req.user._id);

        await sendEmail(user.email, 'Subscription Rejected', `
            <h3>Hello ${user.name},</h3>
            <p>We're sorry. Your subscription request for <strong>${subscription.packageName}</strong> has been <strong>rejected</strong>. Due to <strong>${subscription.rejectionNote}</strong> Please contact support for more details.</p>
          `);


        res.status(200).json({ message: 'Subscription rejected successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to reject subscription', error: err });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password -otpCode -otpExpiresAt -wallet');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch users" })
    }
};

exports.updateUserRole = async (req, res) => {
    const { userId, role } = req.body;

    if (!['user', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }

    try {
        const user = await User.findByIdAndUpdate(userId, { role }, { new: true }).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ message: 'User role updated', user });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Optional: delete their wallet too
        await Wallet.deleteOne({ user: userId });

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }
};
