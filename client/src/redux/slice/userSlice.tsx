import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid?: string;
  name?: string | null;
  email?: string | null;
  photoURL?: string | null;
  role?: "student" | "instructor" | "admin";
};

const initialState: UserState = {};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserState>) => {
       return {...state, ...action.payload}
    },
    logout: () => {
       return {}
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;

export default userSlice.reducer;
