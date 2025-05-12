import React, { useState } from 'react';

const Ads = () => {
    const [ads, setAds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [newAd, setNewAd] = useState({
        title: '',
        type: 'image',
        file: null,
        mediaUrl: '',
        description: '',
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const mediaUrl = URL.createObjectURL(file);
            setNewAd({ ...newAd, file, mediaUrl });
        }
    };

    const handleAddOrUpdateAd = () => {
        if (editIndex !== null) {
            const updatedAds = [...ads];
            updatedAds[editIndex] = newAd;
            setAds(updatedAds);
            setEditIndex(null);
        } else {
            setAds([...ads, newAd]);
        }

        setNewAd({
            title: '',
            type: 'image',
            file: null,
            mediaUrl: '',
            description: '',
        });
        setShowModal(false);
    };

    const handleEdit = (index) => {
        setNewAd(ads[index]);
        setEditIndex(index);
        setShowModal(true);
    };

    const handleDelete = (index) => {
        const filteredAds = ads.filter((_, i) => i !== index);
        setAds(filteredAds);
    };

    return (
        <div className="bg-gradient-to-b from-[#ff512f] to-[#f09819] text-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">
                List or upload ad banners/videos that users can view to earn rewards.
            </p>

            <button
                onClick={() => {
                    setShowModal(true);
                    setEditIndex(null);
                    setNewAd({
                        title: '',
                        type: 'image',
                        file: null,
                        mediaUrl: '',
                        description: '',
                    });
                }}
                className="mb-6 px-4 py-2 bg-white text-orange-700 font-semibold rounded hover:bg-opacity-90 transition"
            >
                Add New Ad
            </button>

            {/* Ads List */}
            {ads.length > 0 && (
                <div className="space-y-4">
                    {ads.map((ad, index) => (
                        <div key={index} className="bg-white bg-opacity-10 p-4 rounded relative">
                            <h3 className="text-xl font-bold text-orange-700">{ad.title}</h3>
                            <p className="text-sm mb-2 text-orange-700">{ad.description}</p>
                            {ad.type === 'image' ? (
                                <img src={ad.mediaUrl} alt={ad.title} className="w-full max-w-xs rounded" />
                            ) : (
                                <video controls className="w-full max-w-xs rounded">
                                    <source src={ad.mediaUrl} type="video/mp4" />
                                </video>
                            )}

                            <div className="mt-2 flex gap-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 px-2 md:px-0">
                    <div className="bg-[#1e293b] text-white p-6 rounded-lg w-full max-w-lg">
                        <h2 className="text-yellow-300 text-xl font-bold mb-4">
                            {editIndex !== null ? 'Edit Ad' : 'Add New Ad'}
                        </h2>
                        <input
                            type="text"
                            placeholder="Ad Title"
                            value={newAd.title}
                            onChange={(e) => setNewAd({ ...newAd, title: e.target.value })}
                            className="w-full p-2 mb-3 rounded bg-[#0f172a] border border-yellow-400"
                        />
                        <select
                            value={newAd.type}
                            onChange={(e) => setNewAd({ ...newAd, type: e.target.value, mediaUrl: '', file: null })}
                            className="w-full p-2 mb-3 rounded bg-[#0f172a] border border-yellow-400"
                        >
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>

                        <input
                            type="file"
                            accept={newAd.type === 'image' ? 'image/*' : 'video/*'}
                            onChange={handleFileChange}
                            className="w-full p-2 mb-3 rounded bg-[#0f172a] border border-yellow-400"
                        />

                        {/* {newAd.mediaUrl && (
                            <div className="mb-3">
                                {newAd.type === 'image' ? (
                                    <img src={newAd.mediaUrl} alt="Preview" className="md:max-w-xs rounded" />
                                ) : (
                                    <video controls className="max-w-xs rounded">
                                        <source src={newAd.mediaUrl} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        )} */}

                        <textarea
                            placeholder="Description"
                            value={newAd.description}
                            onChange={(e) => setNewAd({ ...newAd, description: e.target.value })}
                            className="w-full p-2 mb-4 rounded bg-[#0f172a] border border-yellow-400"
                            rows={3}
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditIndex(null);
                                }}
                                className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddOrUpdateAd}
                                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 font-semibold"
                            >
                                {editIndex !== null ? 'Update Ad' : 'Add Ad'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ads;
