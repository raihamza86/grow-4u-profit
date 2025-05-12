import React, { useState } from 'react';
import "../../components/SidebarStyle.css";

const Payments = () => {
    const [payments, setPayments] = useState([
        { name: 'Ali', type: 'Withdraw', amount: '1000', status: 'Pending', reason: '' },
        { name: 'Sara', type: 'Deposit', amount: '2000', status: 'Approved', reason: '' },
    ]);
    const [cancelModal, setCancelModal] = useState({ show: false, index: null });
    const [cancelReason, setCancelReason] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleApprove = (index) => {
        const updated = [...payments];
        updated[index].status = 'Approved';
        setPayments(updated);
    };

    const handleCancel = (index) => {
        setCancelModal({ show: true, index });
        setCancelReason('');
    };

    const confirmCancel = () => {
        const updated = [...payments];
        updated[cancelModal.index].status = 'Cancelled';
        updated[cancelModal.index].reason = cancelReason || 'No reason provided';
        setPayments(updated);
        setCancelModal({ show: false, index: null });
        setCancelReason('');
    };

    const handleDelete = (index) => {
        const filtered = payments.filter((_, i) => i !== index);
        setPayments(filtered);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="overflow-x-auto hide-scrollbar bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white p-4 rounded-lg shadow-lg">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-opacity-10 text-yellow-200 uppercase text-sm">
                        <th className="text-left p-3">User</th>
                        <th className="text-left p-3">Type</th>
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
                            <td className="p-3 text-nowrap">{pay.name}</td>
                            <td className="p-3 text-nowrap">{pay.type}</td>
                            <td className="p-3 text-nowrap">{pay.amount} PKR</td>
                            <td className="p-3 font-semibold text-nowrap">
                                <span
                                    className={`${pay.status === 'Approved'
                                        ? 'text-green-200'
                                        : pay.status === 'Cancelled'
                                            ? 'text-red-200'
                                            : 'text-yellow-200'
                                        }`}
                                >
                                    {pay.status}
                                </span>
                                {pay.status === 'Cancelled' && pay.reason && (
                                    <p className="text-sm text-red-100 mt-1">Reason: {pay.reason}</p>
                                )}
                            </td>
                            <td className="p-3 relative">
                                {/* Dropdown Button */}
                                <div className="flex  items-center gap-2">
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleDropdown(i)}
                                            disabled={pay.status !== 'Pending'}
                                            className={`px-3 py-1 rounded font-semibold text-nowrap transition ${pay.status !== 'Pending'
                                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                                : 'bg-white text-orange-700 hover:bg-opacity-90'
                                                }`}
                                        >
                                            More ▾
                                        </button>

                                        {openDropdown === i && (
                                            <div className="absolute z-10 right-0 mt-2 bg-white text-black rounded shadow-lg w-40 max-w-[90vw]">
                                                <ul className="py-1 text-sm">
                                                    {pay.status === 'Pending' && (
                                                        <>
                                                            <li
                                                                onClick={() => {
                                                                    handleApprove(i);
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
                                                                Cancel
                                                            </li>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Always-visible Delete button */}
                                    <button
                                        onClick={() => handleDelete(i)}
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
