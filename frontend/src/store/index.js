import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth-slice";
import activate from "./activate-slice";

export const store = configureStore({
  reducer: {
    auth,
    activate,
  },
});
