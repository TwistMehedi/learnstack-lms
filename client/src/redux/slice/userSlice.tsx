import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserRole = "student" | "instructor" | "admin";


export interface UserState {
  uid?: string;
  name?: string | null;
  email?: string | null;
  photoURL?: string | null;
  role?: UserRole;
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
