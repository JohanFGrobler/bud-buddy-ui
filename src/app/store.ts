import { configureStore } from '@reduxjs/toolkit';
import { growApi } from './grows/growSlice';

export const store = configureStore({
  reducer: {
    [growApi.reducerPath]: growApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(growApi.middleware),
});

// Infer types for better type support in hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
