import React, { useEffect, useState } from 'react';
import "../../components/SidebarStyle.css";
import { toast } from 'react-toastify';
import { useCreateSettingsMutation, useGetAllSettingsQuery, useUpdateSettingsMutation } from '../../store/adminSlice';

const Settings = () => {
    const { data: setting, isLoading, error } = useGetAllSettingsQuery();

    const [createSettings] = useCreateSettingsMutation();

    const [updateSettings] = useUpdateSettingsMutation()

    const [form, setForm] = useState({ signupBonus: '', referralBonus: '' });

    const [isSaving, setIsSaving] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    // const [form, setForm] = useState({ type: 'signup', amount: '' });

    useEffect(() => {
        if (setting) {
            setForm({
                signupBonus: setting.signupBonus || '',
                referralBonus: setting.referralBonus || '',
            });
        }
    }, [setting]);

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-[70vh] bg-white">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-[#fd5c2d] border-dashed rounded-full animate-spin"></div>
                    <p className="text-[#fd5c2d] font-semibold text-lg animate-pulse">
                        Loading bonus...
                    </p>
                </div>
            </div>
        );

    if (error) return <p className="text-red-500">Error loading bonus</p>;

    if (!setting) {
        return <p className="text-gray-600 text-center mt-4">🚫 No bonus settings found.</p>;
    }


    const handleSave = async () => {
        setIsSaving(true);
        try {
            if (!setting) {
                // Create settings
                await createSettings({
                    signupBonus: Number(form.signupBonus),
                    referralBonus: Number(form.referralBonus),
                }).unwrap();
                toast.success('Settings created successfully! 🎉');
            } else {
                // Update settings
                await updateSettings({
                    id: setting._id,
                    signupBonus: Number(form.signupBonus),
                    referralBonus: Number(form.referralBonus),
                }).unwrap();
                toast.success('Settings updated successfully! 🎉');
            }
            resetForm();
        } catch (err) {
            console.error("Error saving settings:", err);
            toast.error('Failed to save settings. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const resetForm = () => {
        if (setting) {
            setForm({
                signupBonus: setting.signupBonus || '',
                referralBonus: setting.referralBonus || '',
            });
        } else {
            setForm({ signupBonus: '', referralBonus: '' });
        }
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

            {setting ? (
                <div className="bg-white bg-opacity-10 p-4 rounded flex justify-between items-center overflow-x-scroll hide-scrollbar gap-8 md:gap-0">
                    <div>
                        <h3 className="text-xl font-bold capitalize text-yellow-400 text-nowrap">Signup Bonus</h3>
                        <p className="text-sm text-orange-400">PKR {setting.signupBonus}</p>
                        <h3 className="text-xl font-bold capitalize text-yellow-400 text-nowrap mt-2">Referral Bonus</h3>
                        <p className="text-sm text-orange-400">PKR {setting.referralBonus}</p>
                    </div>
                    <div className="space-x-2 flex items-center">
                        <button
                            onClick={() => {
                                setForm({
                                    signupBonus: setting.signupBonus || '',
                                    referralBonus: setting.referralBonus || '',
                                });
                                setShowModal(true);
                                setEditingIndex(0);
                            }}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                            disabled={!setting}
                        >
                            Edit
                        </button>

                    </div>
                </div>
            ) : (
                <p className="text-sm text-orange-100">No bonus settings found.</p>
            )}


            {/* Modal for Adding/Editing */}
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-[90%] md:w-1/3 text-black">
                        <h2 className="text-yellow-300 text-xl font-bold mb-4">Edit Bonus Settings</h2>

                        <label className="block mb-2">Signup Bonus (PKR)</label>
                        <input
                            type="number"
                            value={form.signupBonus}
                            onChange={(e) => setForm({ ...form, signupBonus: e.target.value })}
                            className="w-full p-2 mb-4 rounded bg-[#fff] border border-yellow-400"
                        />

                        <label className="block mb-2">Referral Bonus (PKR)</label>
                        <input
                            type="number"
                            value={form.referralBonus}
                            onChange={(e) => setForm({ ...form, referralBonus: e.target.value })}
                            className="w-full p-2 mb-4 rounded bg-[#fff] border border-yellow-400"
                        />

                        <div className="flex justify-end gap-3">
                            <button onClick={resetForm} className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 font-semibold" disabled={isSaving}>
                                {isSaving ? 'Saving...' : (setting ? 'Update' : 'Save')}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Settings;
