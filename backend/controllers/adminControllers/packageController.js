const Package = require('../../models/Package');

// Create a new package
exports.createPackage = async (req, res) => {
    const { title, dailyTask, price, dailyEarning, durationDays } = req.body;

    try {
        const totalEarning = dailyEarning * durationDays;
        const newPackage = new Package({ title, dailyTask, price, dailyEarning, durationDays, totalEarning });
        await newPackage.save();
        res.status(201).json({ message: 'Package created', package: newPackage });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Update a package
exports.updatePackage = async (req, res) => {
    const { id } = req.params;
    const { title, dailyTask, price, dailyEarning, durationDays } = req.body;

    try {
        const totalEarning = dailyEarning * durationDays;
        const updated = await Package.findByIdAndUpdate(
            id,
            { title, dailyTask, price, dailyEarning, durationDays, totalEarning },
            { new: true }
        );

        if (!updated) return res.status(404).json({ message: 'Package not found' });
        res.status(200).json({ message: 'Package updated', package: updated });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Delete a package
exports.deletePackage = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Package.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Package not found' });

        res.status(200).json({ message: 'Package deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get all packages (optional for admin/frontend)
exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
