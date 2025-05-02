const mongoose = require('mongoose');

const userTaskSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    taskId: mongoose.Schema.Types.ObjectId,
    completedAt: Date,
    reward: Number
});

module.exports = mongoose.model('UserTask', userTaskSchema);
