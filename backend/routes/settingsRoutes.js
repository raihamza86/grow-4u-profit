const express = require('express');
const router = express.Router();
const { getSettings, updateSettings, createSettings } = require('../controllers/settingsController');

// Optional: use admin middleware to protect
const { auth, isAdmin } = require("../middlewares/auth");

router.get('/', auth, isAdmin, getSettings);
router.post('/', auth, isAdmin, createSettings);
router.put('/', auth, isAdmin, updateSettings);

module.exports = router;
