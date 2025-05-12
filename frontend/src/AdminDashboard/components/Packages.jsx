import React, { useState } from 'react';

const Packages = () => {
    const [packages, setPackages] = useState([
        { name: 'Starter', price: '500 PKR', dailyEarning: '50 PKR', task: '1', duration: '10 Days' },
        { name: 'Pro', price: '2000 PKR', dailyEarning: '150 PKR', task: '1', duration: '15 Days' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [packageData, setPackageData] = useState({
        name: '',
        price: '',
        dailyEarning: '',
        duration: '',
        task: '',
    });

    const handleCreateClick = () => {
        setPackageData({ name: '', price: '', dailyEarning: '', duration: '', task: '' });
        setEditIndex(null);
        setShowModal(true);
    };

    const handleEditClick = (index) => {
        setPackageData(packages[index]);
        setEditIndex(index);
        setShowModal(true);
    };

    const handleSave = () => {
        if (editIndex !== null) {
            // Edit mode
            const updated = [...packages];
            updated[editIndex] = packageData;
            setPackages(updated);
        } else {
            // Create mode
            setPackages([...packages, packageData]);
        }
        setShowModal(false);
        setPackageData({ name: '', price: '', dailyEarning: '', duration: '', task: '' });
        setEditIndex(null);
    };

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {packages.map((pkg, i) => (
                    <div key={i} className="bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white rounded-xl p-4 shadow">
                        <h3 className="text-xl font-semibold text-yellow-200">{pkg.name}</h3>
                        <p className="mt-2">Price: {pkg.price}</p>
                        <p>Daily Earning: {pkg.dailyEarning}</p>
                        <p>Duration: {pkg.duration}</p>
                        <p>Daily Task: {pkg.task}</p>
                        <button
                            onClick={() => handleEditClick(i)}
                            className="mt-4 px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-black rounded"
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>

            {/* Shared Create/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 px-2 md:px-0">
                    <div className="bg-[#0f172a] p-6 rounded-xl text-white w-full max-w-md shadow-xl">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">
                            {editIndex !== null ? 'Edit Package' : 'Create New Package'}
                        </h3>

                        <input
                            type="text"
                            placeholder="Package Name"
                            className="w-full mb-3 p-2 rounded bg-[#1e293b] text-white border border-yellow-300"
                            value={packageData.name}
                            onChange={(e) => setPackageData({ ...packageData, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Price (e.g. 1000 PKR)"
                            className="w-full mb-3 p-2 rounded bg-[#1e293b] text-white border border-yellow-300"
                            value={packageData.price}
                            onChange={(e) => setPackageData({ ...packageData, price: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Daily Earning (e.g. 100 PKR)"
                            className="w-full mb-3 p-2 rounded bg-[#1e293b] text-white border border-yellow-300"
                            value={packageData.dailyEarning}
                            onChange={(e) => setPackageData({ ...packageData, dailyEarning: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Duration (e.g. 10 Days)"
                            className="w-full mb-4 p-2 rounded bg-[#1e293b] text-white border border-yellow-300"
                            value={packageData.duration}
                            onChange={(e) => setPackageData({ ...packageData, duration: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Daily Task (e.g. 1)"
                            className="w-full mb-4 p-2 rounded bg-[#1e293b] text-white border border-yellow-300"
                            value={packageData.task}
                            onChange={(e) => setPackageData({ ...packageData, task: e.target.value })}
                        />

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
                                {editIndex !== null ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Packages;
