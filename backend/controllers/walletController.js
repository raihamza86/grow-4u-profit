const Wallet = require('../models/Wallet');

// 🔄 Init or Get User Wallet
exports.getWallet = async (req, res) => {
    try {
        let wallet = await Wallet.findOne({ user: req.user._id });
        if (!wallet) {
            wallet = new Wallet({ user: req.user._id });
            await wallet.save();
        }
        res.status(200).json(wallet);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching wallet' });
    }
};

// ➕ Deposit
exports.deposit = async (req, res) => {
    try {
        const { amount } = req.body;
        if (!amount || amount <= 0) return res.status(400).json({ message: 'Invalid amount' });

        const wallet = await Wallet.findOne({ user: req.user._id });
        wallet.balance += amount;
        wallet.transactions.push({ type: 'Deposit', amount });

        await wallet.save();
        res.status(200).json({ message: 'Deposit successful', balance: wallet.balance });
    } catch (err) {
        res.status(500).json({ message: 'Deposit failed' });
    }
};

// ➖ Withdraw Request
exports.withdraw = async (req, res) => {
    try {
        const { amount } = req.body;
        const wallet = await Wallet.findOne({ user: req.user._id });

        if (amount > wallet.balance) return res.status(400).json({ message: 'Insufficient balance' });

        wallet.balance -= amount;
        wallet.transactions.push({ type: 'Withdraw', amount, status: 'Pending', notes: 'Requested withdrawal' });

        await wallet.save();
        res.status(200).json({ message: 'Withdraw request submitted', balance: wallet.balance });
    } catch (err) {
        res.status(500).json({ message: 'Withdraw failed' });
    }
};
