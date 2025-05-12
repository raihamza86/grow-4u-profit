import React, { useState } from 'react';
import "../../components/SidebarStyle.css";

const Settings = () => {
    const [bonuses, setBonuses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [form, setForm] = useState({ type: 'signup', amount: '' });

    const handleSave = () => {
        if (editingIndex !== null) {
            const updated = [...bonuses];
            updated[editingIndex] = form;
            setBonuses(updated);
        } else {
            setBonuses([...bonuses, form]);
        }
        resetForm();
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setForm(bonuses[index]);
        setShowModal(true);
    };

    const handleDelete = (index) => {
        const updated = bonuses.filter((_, i) => i !== index);
        setBonuses(updated);
    };

    const resetForm = () => {
        setForm({ type: 'signup', amount: '' });
        setEditingIndex(null);
        setShowModal(false);
    };

    return (
        <div className="bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Set signup/referral bonuses for users.</p>

            <button
                onClick={() => setShowModal(true)}
                className="mb-6 px-4 py-2 bg-white text-orange-700 font-semibold rounded hover:bg-opacity-90 transition"
            >
                Add Bonus Rule
            </button>

            {bonuses.length > 0 ? (
                <div className="space-y-4">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="bg-white bg-opacity-10 p-4 rounded flex justify-between items-center overflow-x-scroll hide-scrollbar gap-8 md:gap-0">
                            <div>
                                <h3 className="text-xl font-bold capitalize text-yellow-400 text-nowrap">{bonus.type} Bonus</h3>
                                <p className="text-sm text-orange-400">Amount: PKR {bonus.amount}</p>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-orange-100">No bonus settings added yet.</p>
            )}

            {/* Modal for Adding/Editing */}
            {showModal && (
                <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 px-2 md:px-0">
                    <div className="bg-[#1e293b] text-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-yellow-300 text-xl font-bold mb-4">
                            {editingIndex !== null ? 'Edit Bonus Rule' : 'Add Bonus Rule'}
                        </h2>

                        <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full p-2 mb-4 rounded bg-[#0f172a] border border-yellow-400"
                        >
                            <option value="signup">Signup Bonus</option>
                            <option value="referral">Referral Bonus</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Amount in PKR"
                            value={form.amount}
                            onChange={(e) => setForm({ ...form, amount: e.target.value })}
                            className="w-full p-2 mb-4 rounded bg-[#0f172a] border border-yellow-400"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={resetForm}
                                className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 font-semibold"
                            >
                                {editingIndex !== null ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
