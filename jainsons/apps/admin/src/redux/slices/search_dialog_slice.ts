import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISearchDialogSliceState {
  isOpen: boolean;
}

const initialState: ISearchDialogSliceState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "search-dialog-slice",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
