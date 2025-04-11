import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  admin: null
};

export const authSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { admin } = action.payload;
      state.admin = admin;
      if (admin === null) {
        state.isAuth = false;
      } else {
        state.isAuth = true;
      }
    }
  }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
