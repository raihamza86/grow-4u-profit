import React, { useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([
        { name: 'Ali Khan', email: 'ali@example.com', status: 'Active', role: 'User' },
        { name: 'Sara Ahmed', email: 'sara@example.com', status: 'Blocked', role: 'User' },
    ]);

    const updateRole = (index, newRole) => {
        const updatedUsers = [...users];
        updatedUsers[index].role = newRole;
        setUsers(updatedUsers);
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    return (
        <div className="overflow-x-auto bg-gradient-to-br from-[#ff512f] to-[#f09819] text-white p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 font-Fredoka">Users Management</h2>
            <table className="min-w-full table-auto text-left">
                <thead>
                    <tr className="bg-opacity-10 text-yellow-200 uppercase text-sm">
                        <th className="p-3 text-nowrap">Name</th>
                        <th className="p-3 text-nowrap">Email</th>
                        <th className="p-3 text-nowrap">Status</th>
                        <th className="p-3 text-nowrap">Role</th>
                        <th className="p-3 text-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i} className="border-b border-orange-200/20 hover:bg-opacity-10 transition">
                            <td className="p-3 text-nowrap">{user.name}</td>
                            <td className="p-3 text-nowrap">{user.email}</td>
                            <td className={`p-3 text-nowrap font-semibold ${user.status === 'Active' ? 'text-green-200' : 'text-red-200'}`}>
                                {user.status}
                            </td>
                            <td className="p-3">
                                <select
                                    className="p-1 rounded text-white font-semibold bg-[#fb983f] border border-yellow-200"
                                    value={user.role}
                                    onChange={(e) => updateRole(i, e.target.value)}
                                >
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </td>

                            <td className="p-3 space-x-2">
                                <button
                                    className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 transition"
                                    onClick={() => deleteUser(i)}
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
