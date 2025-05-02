const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    packageName: String,
    price: Number,
    dailyEarning: Number,
    durationDays: Number,
    startDate: { type: Date, default: Date.now },
    endDate: Date,
    lastEarningDate: { type: Date },
    totalEarned: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
