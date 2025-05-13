import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const Base_URL = import.meta.env.VITE_BASE_URL;


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${Base_URL}/api/auth`,
        credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // Register a new user:
        registerUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),

        // Login a user:
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),

        // Logout a user:
        logoutUser: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi;

export default authApi;