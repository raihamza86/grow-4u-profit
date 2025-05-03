const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    dailyTask: { type: String },
    price: { type: Number, required: true },
    dailyEarning: { type: Number, required: true },
    durationDays: { type: Number, required: true },
    totalEarning: { type: Number, required: true }, // usually dailyEarning * durationDays
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Package', packageSchema);
