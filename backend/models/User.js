const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    referralCode: { type: String, unique: true },
    referredBy: { type: String },
    referralEarnings: { type: Number, default: 0 },

    role: { type: String, enum: ["user", "admin"], default: "user" },
    wallet: {
        balance: { type: Number, default: 200 },
        referralEarnings: { type: Number, default: 0 },
        taskEarnings: { type: Number, default: 0 },
        depositTotal: { type: Number, default: 0 },
    },
    createdAt: { type: Date, default: Date.now },
    otpCode: String,
    otpExpiresAt: Date,
    isVerified: { type: Boolean, default: false }

});

module.exports = mongoose.model('User', userSchema);
