const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const {
    purchaseSubscription,
    getMySubscriptions,
    earnDaily,
} = require('../controllers/subscriptionController');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/screenshots/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage });


router.post('/purchase', auth, upload.single('screenshot'), purchaseSubscription);
router.get('/my-subscriptions', auth, getMySubscriptions);
router.post('/earn/:id', auth, earnDaily);

module.exports = router;
