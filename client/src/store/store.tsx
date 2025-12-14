import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../redux/api/auth/authApi'
import userSlice from '../redux/slice/userSlice';
 
export const store = configureStore({
  reducer: {
     user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
