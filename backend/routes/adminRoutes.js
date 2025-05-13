const express = require('express');
const router = express.Router();
const { getAllSubscriptions, verifySubscription, getPendingSubscriptions, rejectSubscription, getAllUsers, updateUserRole, deleteUser } = require('../controllers/adminController');
const { auth, isAdmin } = require('../middlewares/auth');
const { getAllPackages, createPackage, updatePackage, deletePackage } = require('../controllers/adminControllers/packageController');
const { approveWithdrawRequest, rejectWithdrawRequest, getAllWithdrawRequests } = require('../controllers/adminControllers/withdrawController');


//  ** Subscription Controllers:
router.get('/subscriptions', auth, isAdmin, getAllSubscriptions);
router.get('/pending-subscriptions', auth, isAdmin, getPendingSubscriptions);
router.put('/verify-subscription/:id', auth, isAdmin, verifySubscription);
router.patch('/subscription/:id/reject', auth, isAdmin, rejectSubscription);

// ** User Controllers:
// Get all users:
router.get('/users', auth, isAdmin, getAllUsers);
// Update user role
router.put('/users/:id', auth, isAdmin, updateUserRole);
// Delete user by ID
router.delete('/users/:userId', auth, isAdmin, deleteUser);

//  ** Package Controllers:
router.get('/packages', auth, isAdmin, getAllPackages);
router.post('/packages', auth, isAdmin, createPackage);
router.put('/packages/:id', auth, isAdmin, updatePackage);
router.delete('/packages/:id', auth, isAdmin, deletePackage);


// ** Withdraw Controller:
router.get('/withdraws', auth, isAdmin, getAllWithdrawRequests);
router.put('/withdraws/approve/:id', auth, isAdmin, approveWithdrawRequest);
router.put('/withdraws/reject/:id', auth, isAdmin, rejectWithdrawRequest);

module.exports = router;
