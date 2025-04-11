import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebar: false,
  isDarkMode: localStorage.getItem('dark-mode') === 'true' ? true : false
};

const GlobalAppSettingSlice = createSlice({
  name: 'globalAppSetting',
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toggleDarkMode: (state) => {
      const mode = state.isDarkMode ? 'false' : 'true';
      localStorage.setItem('dark-mode', mode);
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

export default GlobalAppSettingSlice.reducer;
export const { toggleSidebar, toggleDarkMode } = GlobalAppSettingSlice.actions;
