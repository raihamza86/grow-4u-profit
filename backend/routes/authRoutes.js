const express = require('express');
const router = express.Router();
const { register, verifyOtp, login, sendResetOtp, verifyResetOtp, resetPassword, logoutUser } = require('../controllers/authController');

router.post('/register', register);

router.post('/verify-otp', verifyOtp);

router.post('/login', login);

router.post('/forgot-password', sendResetOtp);

router.post('/verify-reset-otp', verifyResetOtp);

router.post('/reset-password', resetPassword);

router.post('/logout', logoutUser);


module.exports = router;
