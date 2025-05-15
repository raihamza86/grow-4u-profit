import React, { useState } from 'react';
import { useCreatePackageMutation, useDeletePackageMutation, useGetAllPackagesQuery, useUpdatePackageMutation } from '../../store/adminSlice';
import { toast } from 'react-toastify';

const Packages = () => {

    const { data: packages, isLoading, error } = useGetAllPackagesQuery();
    const [createPackage] = useCreatePackageMutation();
    const [updatePackage] = useUpdatePackageMutation();
    const [deletePackage] = useDeletePackageMutation();

    const [editingPackageId, setEditingPackageId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [packageData, setPackageData] = useState({
        title: '',
        price: '',
        dailyEarning: '',
        durationDays: '',
        dailyTask: '',
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-[70vh] bg-white">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-[#fd5c2d] border-dashed rounded-full animate-spin"></div>
                    <p className="text-[#fd5c2d] font-semibold text-lg animate-pulse">
                        Loading packages...
                    </p>
                </div>
            </div>
        );

    if (error) return <p className="text-red-500">Error loading packages</p>;

    const isEmpty = !packages || packages.length === 0;


    const handleCreateClick = () => {
        setPackageData({ title: '', price: '', dailyEarning: '', durationDays: '', dailyTask: '' });
        setEditingPackageId(null);
        setShowModal(true);
    };

    const handleEditClick = (pkg) => {
        setPackageData(pkg);
        setEditingPackageId(pkg._id);
        setShowModal(true);
    };


    const handleSave = async () => {
        const { title, price, dailyEarning, durationDays, dailyTask } = packageData;

        if (!title || !price || !dailyEarning || !durationDays || !dailyTask) {
            toast.error('Please fill all fields');
            return;
        }

        if (editingPackageId) {
            // Edit mode
            try {
                const response = await updatePackage({ packageId: editingPackageId, packageData }).unwrap();
                if (response) {
                    toast.success('Package updated successfully! 🎉');
                }
            } catch (error) {
                toast.error('Failed to update package. Please try again.');
            }
        } else {
            // Create mode
            try {
                const response = await createPackage(packageData).unwrap();
                if (response) {
                    toast.success('Package created successfully! 🎉');
                }
            } catch (error) {
                toast.error('Failed to create package. Please try again.');
            }
        }
        setShowModal(false);
        setPackageData({ title: '', price: '', dailyEarning: '', durationDays: '', dailyTask: '' });
        setEditingPackageId(null);
    };

    const handleDeleteClick = async (packageId) => {
        if (window.confirm('Are you sure you want to delete this package?')) {
            try {
                const response = await deletePackage(packageId).unwrap();
                if (response) {
                    toast.success('Package deleted successfully! 🎉');
                }
            } catch (error) {
                toast.error('Failed to delete package. Please try again.');
            }
        }
    }

    const inputs = [
        { label: 'Package Name', key: 'title', type: 'text' },
        { label: 'Price (e.g. 1000)', key: 'price', type: 'number' },
        { label: 'Daily Earning (e.g. 100)', key: 'dailyEarning', type: 'number' },
        { label: 'Duration (e.g. 10 Days)', key: 'durationDays', type: 'number' },
        { label: 'Daily Task (e.g. 1)', key: 'dailyTask', type: 'text' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Packages</h2>
                <button
                    onClick={handleCreateClick}
                    className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-black rounded font-semibold"
                >
                    + Create Package
                </button>
            </div>

            {isEmpty ? (
                <div className="text-center mt-10">
                    <p className="text-gray-600 mb-4">🚫 No packages available.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {packages.map((pkg, i) => (
                        <div key={pkg._id} className="bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white rounded-xl p-4 shadow">
                            <h3 className="text-xl font-semibold text-yellow-200">{pkg.title}</h3>
                            <p className="mt-2">Price: {pkg.price}</p>
                            <p>Daily Earning: {pkg.dailyEarning}</p>
                            <p>Duration: {pkg.durationDays}</p>
                            <p>Daily Task: {pkg.dailyTask}</p>
                            <p>Total Earning: {pkg.totalEarning}</p>
                            <div className='flex items-center gap-8'>
                                <button
                                    onClick={() => handleEditClick(pkg)}
                                    className="mt-4 px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-black rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(pkg._id)}
                                    className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Shared Create/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 px-2 md:px-0">
                    <div className="bg-[#0f172a] p-6 rounded-xl text-white w-full max-w-md shadow-xl">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">
                            {editingPackageId ? 'Edit Package' : 'Add New Package'}
                        </h3>

                        {inputs.map(({ label, key, type }) => (
                            <input
                                key={key}
                                type={type}
                                placeholder={label}
                                className="w-full mb-3 p-2 rounded bg-[#1e293b] text-white border border-yellow-300"
                                value={packageData[key]}
                                onChange={(e) => setPackageData({ ...packageData, [key]: e.target.value })}
                            />
                        ))}

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded"
                            >
                                {editingPackageId !== null ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Packages;
