const express = require('express');
const router = express.Router();
const { getAllSubscriptions, verifySubscription, getPendingSubscriptions, rejectSubscription } = require('../controllers/adminController');
const { auth, isAdmin } = require('../middlewares/auth');


router.get('/subscriptions', auth, isAdmin, getAllSubscriptions);
router.get('/pending-subscriptions', auth, isAdmin, getPendingSubscriptions);
router.put('/verify-subscription/:id', auth, isAdmin, verifySubscription);
router.patch('/subscription/:id/reject', auth, isAdmin, rejectSubscription);

module.exports = router;
