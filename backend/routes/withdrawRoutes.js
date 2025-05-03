const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { submitWithdrawRequest, getMyWithdrawRequests } = require('../controllers/withdrawController');

router.get('/mine', auth, getMyWithdrawRequests);
router.post('/', auth, submitWithdrawRequest);

module.exports = router;
