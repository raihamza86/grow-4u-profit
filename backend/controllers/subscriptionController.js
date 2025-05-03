const Subscription = require('../models/Subscription');
const Wallet = require('../models/Wallet');
const sendEmail = require('../utils/sendEmail');
const User = require('../models/User');

exports.purchaseSubscription = async (req, res) => {
    try {
        const { packageName, price, dailyEarning, durationDays, transactionId } = req.body;
        const screenshot = req.file ? req.file.path : null; // using multer

        if (!transactionId || !screenshot) {
            return res.status(400).json({ message: "Transaction ID and Screenshot are required" });
        }

        const wallet = await Wallet.findOne({ user: req.user._id });
        if (!wallet || wallet.balance < price) {
            return res.status(400).json({ message: 'Insufficient wallet balance' });
        }

        // Deduct wallet
        wallet.balance -= price;
        wallet.transactions.push({
            type: 'Withdraw',
            amount: price,
            notes: `Purchased package: ${packageName}`
        });
        await wallet.save();

        const start = new Date();
        const end = new Date();
        end.setDate(start.getDate() + durationDays);

        const newSubscription = new Subscription({
            user: req.user._id,
            packageName,
            price,
            dailyEarning,
            durationDays,
            startDate: start,
            endDate: end,
            transactionId,
            paymentScreenshot: screenshot,
            paymentStatus: 'Pending',
            active: false,
        });

        await newSubscription.save();

        const user = await User.findById(req.user._id);

        await sendEmail(user.email, 'Subscription Requested', `
            <h3>Hello ${user.name},</h3>
            <p>Your subscription request for <strong>${packageName}</strong> has been received and is under review.</p>
          `);


        res.status(201).json({
            message: 'Subscription created and pending verification',
            subscription: newSubscription,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.getMySubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ user: req.user._id }).sort({ startDate: -1 });
        res.status(200).json(subscriptions);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch subscriptions' });
    }
};

exports.earnDaily = async (req, res) => {
    try {
        const subscription = await Subscription.findOne({
            _id: req.params.id,
            user: req.user._id,
            active: true,
            paymentStatus: 'Paid'
        });

        if (!subscription) return res.status(404).json({ message: 'Subscription not found or inactive' });

        const today = new Date().toDateString();
        const lastEarn = subscription.lastEarningDate ? new Date(subscription.lastEarningDate).toDateString() : null;

        if (lastEarn === today) {
            return res.status(400).json({ message: 'Already earned today' });
        }

        const now = new Date();
        if (now > subscription.endDate) {
            subscription.active = false;
            await subscription.save();
            return res.status(400).json({ message: 'Subscription expired' });
        }

        // ✅ Update subscription earning
        subscription.totalEarned += subscription.dailyEarning;
        subscription.lastEarningDate = now;
        await subscription.save();

        // ✅ Update user's wallet
        const wallet = await Wallet.findOne({ user: req.user._id });
        if (wallet) {
            wallet.balance += subscription.dailyEarning;
            wallet.transactions.push({
                type: 'Earning',
                amount: subscription.dailyEarning,
                notes: `Daily task earning for subscription ${subscription._id}`
            });
            await wallet.save();
        }

        res.status(200).json({
            message: `You earned PKR ${subscription.dailyEarning} today!`,
            totalEarned: subscription.totalEarned,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

