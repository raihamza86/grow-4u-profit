const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { getWallet, deposit, withdraw } = require('../controllers/walletController');

router.get('/', auth, getWallet);
router.post('/deposit', auth, deposit);
router.post('/withdraw', auth, withdraw);

module.exports = router;
