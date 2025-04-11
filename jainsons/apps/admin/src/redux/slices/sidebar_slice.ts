import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISidebarSliceState {
  isCollapsed: boolean;
  isExpanded: boolean;
  isHidden: boolean;
}

const initialState: ISidebarSliceState = {
  isCollapsed: false,
  isExpanded: false,
  isHidden: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar-slice",
  initialState,
  reducers: {
    setIsExpanded(state, action: PayloadAction<boolean>) {
      state.isExpanded = action.payload;
    },
    setIsCollapsed(state, action: PayloadAction<boolean>) {
      state.isCollapsed = action.payload;
    },
    setIsHidden(state, action: PayloadAction<boolean>) {
      state.isHidden = action.payload;
    },
  },
});

export const { setIsExpanded, setIsCollapsed, setIsHidden } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
