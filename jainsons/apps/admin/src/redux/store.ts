import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@/redux/slices/auth_slice";
import SidebarReducer from "@/redux/slices/sidebar_slice";
import SearchDialogReducer from "@/redux/slices/search_dialog_slice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    sidebar: SidebarReducer,
    searchDialog: SearchDialogReducer,
  },
});

export type AppSliceState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
