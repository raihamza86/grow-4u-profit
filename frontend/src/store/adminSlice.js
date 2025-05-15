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
        // ** User Management **

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

        // ** Package Management **

        // Fetch all packages:
        getAllPackages: builder.query({
            query: () => ({
                url: '/packages',
                method: 'GET',
            }),
            providesTags: ['Admin'],
        }),

        // Create package:
        createPackage: builder.mutation({
            query: (packageData) => ({
                url: '/packages',
                method: 'POST',
                body: packageData,
            }),
            invalidatesTags: ['Admin'],
        }),

        // Update package:
        updatePackage: builder.mutation({
            query: ({ packageId, packageData }) => ({
                url: `/packages/${packageId}`,
                method: 'PUT',
                body: packageData,
            }),
            invalidatesTags: ['Admin'],
        }),

        // Delete package:
        deletePackage: builder.mutation({
            query: (packageId) => ({
                url: `/packages/${packageId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Admin'],
        }),

        // ** Withdraw Management **

        // Fetch all withdraw requests:
        getAllWithdrawRequests: builder.query({
            query: () => ({
                url: '/withdraws',
                method: 'GET',
            }),
            providesTags: ['Admin'],
        }),

        // Approve withdraw request:
        approveWithdrawRequest: builder.mutation({
            query: ({ requestId }) => ({
                url: `/withdraws/approve/${requestId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Admin'],
        }),

        // Reject withdraw request:
        rejectWithdrawRequest: builder.mutation({
            query: ({ requestId, rejectionNote }) => ({
                url: `/withdraws/reject/${requestId}`,
                method: 'PUT',
                body: { rejectionNote },
            }),
            invalidatesTags: ['Admin'],
        }),

        // Delete withdraw request:
        deleteWithdrawRequest: builder.mutation({
            query: ({ requestId }) => ({
                url: `/withdraws/${requestId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Admin'],
        }),


    }),
});

export const { useGetAllUsersQuery, useUpdateUserStatusMutation, useDeleteUserMutation, useGetAllPackagesQuery, useCreatePackageMutation, useUpdatePackageMutation, useDeletePackageMutation, useGetAllWithdrawRequestsQuery, useApproveWithdrawRequestMutation, useRejectWithdrawRequestMutation, useDeleteWithdrawRequestMutation } = adminApi;


export default adminApi;

