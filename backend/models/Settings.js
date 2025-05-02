const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    signupBonus: { type: Number, default: 200 },
    referralBonus: { type: Number, default: 100 },
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
