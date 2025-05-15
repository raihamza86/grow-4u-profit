import React, { useState } from 'react';
import "../../components/SidebarStyle.css";
import { useGetAllWithdrawRequestsQuery, useApproveWithdrawRequestMutation, useRejectWithdrawRequestMutation, useDeleteWithdrawRequestMutation } from '../../store/adminSlice';
import { toast } from 'react-toastify';

const Payments = () => {

    const { data: payments, isLoading, error } = useGetAllWithdrawRequestsQuery();
    const [approveWithdrawRequest] = useApproveWithdrawRequestMutation();
    const [rejectWithdrawRequest] = useRejectWithdrawRequestMutation();
    const [deleteWithdrawRequest] = useDeleteWithdrawRequestMutation();

    const [cancelModal, setCancelModal] = useState({ show: false, index: null });
    const [cancelReason, setCancelReason] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-[70vh] bg-white">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-[#fd5c2d] border-dashed rounded-full animate-spin"></div>
                    <p className="text-[#fd5c2d] font-semibold text-lg animate-pulse">
                        Loading payments...
                    </p>
                </div>
            </div>
        );

    if (error) return <p className="text-red-500">Error loading users</p>;

    if (!payments || payments.length === 0) {
        return <p className="text-gray-600 text-center mt-4">🚫 No payments available.</p>
    };

    const handleApprove = async (requestId) => {
        try {
            const response = await approveWithdrawRequest({ requestId }).unwrap();
            if (response) {
                toast.success('Payment approved successfully! 🎉');
            }
        } catch (error) {
            toast.error('Failed to approve payment.');
        }
    };

    const handleCancel = (index) => {
        setCancelModal({ show: true, index });
        setCancelReason('');
    };

    const confirmCancel = async () => {
        const payment = payments[cancelModal.index];
        if (!payment) return;

        try {
            const response = await rejectWithdrawRequest({
                requestId: payment._id,
                rejectionNote: cancelReason || 'No reason provided'
            }).unwrap();

            toast.success('Withdrawal request rejected 🚫');

            // Optional: you could also update the local state manually if needed
            setCancelModal({ show: false, index: null });
            setCancelReason('');
        } catch (error) {
            toast.error('Failed to reject request.');
        }
    };


    const handleDelete = async (requestId) => {
        try {
            const response = await deleteWithdrawRequest({ requestId }).unwrap();
            if (response) {
                toast.success('Payment deleted successfully! 🎉');
            }
        } catch (error) {
            toast.error('Failed to delete payment.');
        }
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };


    return (
        <div className="overflow-x-auto hide-scrollbar bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white p-4 rounded-lg shadow-lg">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-opacity-10 text-yellow-200 uppercase text-sm">
                        <th className="text-left p-3">User</th>
                        <th className="text-left p-3">Type</th>
                        <th className="text-left p-3">Account Detail</th>
                        <th className="text-left p-3">Amount</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-left p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((pay, i) => (
                        <tr
                            key={i}
                            className="border-b border-white border-opacity-10 hover:bg-opacity-10 transition"
                        >
                            <td className="p-3 text-nowrap">{pay.name || 'Unknown'}</td>
                            <td className="p-3 text-nowrap">{pay.method}</td>
                            <td className="p-3 text-nowrap">{pay.accountDetails}</td>
                            <td className="p-3 text-nowrap">{pay.amount}</td>
                            <td className="p-3 font-semibold text-nowrap">
                                <span
                                    className={`${pay.status === 'Approved'
                                        ? 'text-green-200'
                                        : pay.status === 'Rejected'
                                            ? 'text-red-200'
                                            : 'text-yellow-200'
                                        }`}
                                >
                                    {pay.status}
                                </span>
                                {pay.status === 'Rejected' && pay.rejectionNote && (
                                    <p className="text-sm text-red-100 mt-1">Reason: {pay.rejectionNote}</p>
                                )}
                            </td>
                            <td className="p-3 relative">
                                {/* Dropdown Button */}
                                <div className="flex  items-center gap-2">
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleDropdown(pay._id)}
                                            disabled={pay.status !== 'Pending'}
                                            className={`${pay.status !== 'Pending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            More ▾
                                        </button>

                                        {openDropdown === pay._id && (
                                            <div className="absolute z-10 right-0 mt-2 bg-white text-black rounded shadow-lg w-40 max-w-[90vw]">
                                                <ul className="py-1 text-sm">
                                                    {pay.status === 'Pending' && (
                                                        <>
                                                            <li
                                                                onClick={() => {
                                                                    handleApprove(pay._id);
                                                                    setOpenDropdown(null);
                                                                }}
                                                                className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                                                            >
                                                                Approve
                                                            </li>
                                                            <li
                                                                onClick={() => {
                                                                    handleCancel(i);
                                                                    setOpenDropdown(null);
                                                                }}
                                                                className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                                                            >
                                                                Reject
                                                            </li>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Always-visible Delete button */}
                                    <button
                                        onClick={() => handleDelete(pay._id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Cancel Modal */}
            {cancelModal.show && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-50 px-2 md:px-0">
                    <div className="bg-[#1e293b] p-6 rounded-lg w-full max-w-md text-white">
                        <h2 className="text-yellow-300 font-bold text-lg mb-4">Cancel Payment</h2>
                        <textarea
                            rows={4}
                            placeholder="Enter reason for cancellation..."
                            className="w-full p-3 rounded bg-[#0f172a] text-white border border-yellow-400 mb-4"
                            value={cancelReason}
                            onChange={(e) => setCancelReason(e.target.value)}
                        />
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setCancelModal({ show: false, index: null })}
                                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Close
                            </button>
                            <button
                                onClick={confirmCancel}
                                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 font-semibold"
                            >
                                Confirm Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payments;
