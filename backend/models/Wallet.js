const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    balance: { type: Number, default: 0 },
    transactions: [
        {
            type: { type: String, enum: ['Deposit', 'Withdraw', 'Earning', 'Refund'], required: true },
            amount: Number,
            date: { type: Date, default: Date.now },
            status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Approved' }, // for admin review
            notes: String,
        }
    ]
});

module.exports = mongoose.model('Wallet', walletSchema);
