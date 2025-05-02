const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/settingsController');

// Optional: use admin middleware to protect
const { auth, isAdmin } = require("../middlewares/auth");

router.get('/', getSettings);
router.put('/', auth, updateSettings);

module.exports = router;
