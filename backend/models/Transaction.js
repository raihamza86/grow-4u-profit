const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    type: { type: String, enum: ['deposit', 'withdraw'] },
    method: { type: String, enum: ['easypaisa', 'jazzcash'] },
    amount: Number,
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    referenceNumber: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
