import React, { useState } from 'react';
import { useGetAllUsersQuery, useUpdateUserStatusMutation, useDeleteUserMutation } from '../../store/adminSlice';
import { toast } from 'react-toastify';

const Users = () => {
    const { data: users, error, isLoading } = useGetAllUsersQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
    });

    const [updateUserStatus] = useUpdateUserStatusMutation();
    const [deleteUser] = useDeleteUserMutation();

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-[70vh] bg-white">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
                    <p className="text-green-700 font-semibold text-lg animate-pulse">
                        Loading Users...
                    </p>
                </div>
            </div>
        );

    if (!users || users.length === 0) {
        return <p className="text-gray-600 text-center mt-4">🚫 No users available.</p>;
    }
    if (error) return <p className="text-red-500">Error loading users</p>;

    const updateRole = async (userId, newRole) => {
        try {
            await updateUserStatus({ userId, role: newRole }).unwrap();
            toast.success(`User role updated to ${newRole} successfully! 🎉`);
        } catch (error) {
            toast.error("Failed to update user role");
        };
    };

    const delUser = async (userId) => {
        try {
            await deleteUser(userId).unwrap();
            toast.success("User deleted successfully! 🎉");
        } catch (error) {
            console.error("Failed to delete user:", error);
            toast.error("Failed to delete user");
        }
    };

    return (
        <div className="overflow-x-auto bg-gradient-to-br from-[#ff512f] to-[#f09819] text-white p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 font-Fredoka">Users Management</h2>
            <table className="min-w-full table-auto text-left">
                <thead>
                    <tr className="bg-opacity-10 text-yellow-200 uppercase text-sm">
                        <th className="p-3 text-nowrap">Name</th>
                        <th className="p-3 text-nowrap">Email</th>
                        <th className="p-3 text-nowrap">Referral Code</th>
                        <th className="p-3 text-nowrap">Role</th>
                        <th className="p-3 text-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i} className="border-b border-orange-200/20 hover:bg-opacity-10 transition">
                            <td className="p-3 text-nowrap">{user.name}</td>
                            <td className="p-3 text-nowrap">{user.email}</td>
                            <td className={`p-3 text-nowrap font-semibold text-center`}>
                                {user.referredBy ? user.referredBy : 'N/A'}
                            </td>
                            <td className="p-3">
                                <select
                                    className="p-1 rounded text-white font-semibold bg-[#fb983f] border border-yellow-200"
                                    value={user.role}
                                    onChange={(e) => updateRole(user._id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>

                            <td className="p-3 space-x-2">
                                <button
                                    className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 transition"
                                    onClick={() => delUser(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
