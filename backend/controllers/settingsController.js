const Settings = require('../models/Settings');

// Get current bonus settings
exports.getSettings = async (req, res) => {
    try {
        const settings = await Settings.findOne();
        if (!settings) {
            return res.status(404).json({ message: "Settings not found" });
        }
        res.status(200).json(settings);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update bonuses (admin only)
exports.updateSettings = async (req, res) => {
    const { signupBonus, referralBonus } = req.body;
    try {
        let settings = await Settings.findOne();
        if (!settings) {
            settings = new Settings();
        }

        if (signupBonus !== undefined) settings.signupBonus = signupBonus;
        if (referralBonus !== undefined) settings.referralBonus = referralBonus;

        await settings.save();
        res.status(200).json({ message: 'Settings updated', settings });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
