import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const Base_URL = import.meta.env.VITE_BASE_URL;

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${Base_URL}/api/admin`,
        credentials: 'include',
    }),
    tagTypes: ['Admin'],
    endpoints: (builder) => ({
        // Fetch all users:
        getAllUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
            providesTags: ['Admin'],
        }),

        // Update user status:
        updateUserStatus: builder.mutation({
            query: ({ userId, role }) => ({
                url: `/users/${userId}`,
                method: 'PUT',
                body: { role },
            }),
            invalidatesTags: ['Admin'],
        }),

        // Delete user:
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Admin'],
        }),


    }),
});

export const { useGetAllUsersQuery, useUpdateUserStatusMutation, useDeleteUserMutation } = adminApi;


export default adminApi;

