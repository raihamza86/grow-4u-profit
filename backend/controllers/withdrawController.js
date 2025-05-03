const WithdrawRequest = require('../models/WithdrawRequest');
const Wallet = require('../models/Wallet');

exports.submitWithdrawRequest = async (req, res) => {
    try {
        const { amount, method, accountDetails } = req.body;

        const wallet = await Wallet.findOne({ user: req.user._id });
        if (!wallet || wallet.balance < amount) {
            return res.status(400).json({ message: 'Insufficient wallet balance' });
        }

        // Deduct immediately (or hold depending on logic)
        wallet.balance -= amount;
        wallet.transactions.push({
            type: 'Withdraw',
            amount,
            notes: `Withdraw request submitted via ${method}`,
        });
        await wallet.save();

        const request = await WithdrawRequest.create({
            user: req.user._id,
            amount,
            method,
            accountDetails,
        });

        res.status(201).json({ message: 'Withdraw request submitted', request });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};


exports.getMyWithdrawRequests = async (req, res) => {
    try {
        const requests = await WithdrawRequest.find({ user: req.user._id }).sort({ requestedAt: -1 });
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch withdraw requests' });
    }
};
