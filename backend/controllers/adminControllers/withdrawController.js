const WithdrawRequest = require("../../models/WithdrawRequest");
const Wallet = require("../../models/Wallet");

exports.getAllWithdrawRequests = async (req, res) => {
    try {
        const requests = await WithdrawRequest.find().populate('user', 'name email').sort({ requestedAt: -1 });
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch withdraw requests' });
    }
};

exports.approveWithdrawRequest = async (req, res) => {
    try {
        const request = await WithdrawRequest.findById(req.params.id);
        if (!request || request.status !== 'Pending') {
            return res.status(404).json({ message: 'Request not found or already processed' });
        }

        request.status = 'Approved';
        request.processedAt = new Date();
        await request.save();

        res.status(200).json({ message: 'Withdraw request approved' });
    } catch (err) {
        res.status(500).json({ message: 'Error approving request' });
    }
};

exports.rejectWithdrawRequest = async (req, res) => {
    try {
        const { rejectionNote } = req.body;
        const request = await WithdrawRequest.findById(req.params.id);
        if (!request || request.status !== 'Pending') {
            return res.status(404).json({ message: 'Request not found or already processed' });
        }

        // Refund to wallet
        const wallet = await Wallet.findOne({ user: request.user });
        wallet.balance += request.amount;
        wallet.transactions.push({
            type: 'Refund',
            amount: request.amount,
            notes: 'Withdraw request rejected',
        });
        await wallet.save();

        request.status = 'Rejected';
        request.rejectionNote = rejectionNote;
        request.processedAt = new Date();
        await request.save();

        res.status(200).json({ message: 'Withdraw request rejected and amount refunded' });
    } catch (err) {
        res.status(500).json({ message: 'Error rejecting request' });
    }
};

exports.deleteWithdrawRequest = async (req, res) => {
    try {
        const { id } = req.params;
        await WithdrawRequest.findByIdAndDelete(id);
        res.status(200).json({ message: 'Withdraw request deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting request' });
    }
}


