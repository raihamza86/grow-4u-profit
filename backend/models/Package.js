const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    dailyEarning: Number,
    durationDays: Number,
});

module.exports = mongoose.model('Package', packageSchema);
