import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { adminApi } from './adminSlice';

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, adminApi.middleware),
});

export default store;