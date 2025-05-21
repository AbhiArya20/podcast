import activate from "@/store/activate-slice";
import auth from "@/store/auth-slice";
import { configureStore } from "@reduxjs/toolkit";
import heroSection from "@/store/hero-section-slice";

export const store = configureStore({
  reducer: {
    auth,
    activate,
    heroSection,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
