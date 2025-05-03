const mongoose = require('mongoose');

const withdrawRequestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['JazzCash', 'EasyPaisa', 'Bank'], required: true },
    accountDetails: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    rejectionNote: { type: String },
    requestedAt: { type: Date, default: Date.now },
    processedAt: { type: Date },
});

module.exports = mongoose.model('WithdrawRequest', withdrawRequestSchema);
