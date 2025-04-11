import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@/redux/slices/auth-slice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type AppSliceState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
