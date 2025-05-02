const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const {
    purchaseSubscription,
    getMySubscriptions,
    earnDaily,
} = require('../controllers/subscriptionController');

router.post('/purchase', auth, purchaseSubscription);
router.get('/my-subscriptions', auth, getMySubscriptions);
router.post('/earn/:id', auth, earnDaily);

module.exports = router;
