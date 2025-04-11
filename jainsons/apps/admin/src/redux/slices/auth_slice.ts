import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "lucide-react";

export interface IImages {
  image: string;
  blurHash: string;
  etag: string;
}

export interface IPhoneNumber {
  countryCode: string;
  number: string;
}
export interface AuthState {
  _id: string;
  phoneNumber?: IPhoneNumber;
  avatar?: IImages;
  firstName: string;
  lastName?: string;
  customerId: string;
  email: string;
  password: string;
  totalOrder: number;
  isEmailVerified: boolean;
  totalSpend: number;
  isAdmin: boolean;
  status: "Active" | "Blocked" | "Deleted";
  country: string;
  createdAt: Date;
}

interface User {
  user: AuthState | null;
}

const initialState: User = {
  user: null,
};

export const counterSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload.user;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = counterSlice.actions;

export default counterSlice.reducer;
