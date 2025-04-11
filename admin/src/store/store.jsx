import { configureStore } from '@reduxjs/toolkit';
import GlobalAppSettingSlice from './slices/GlobalAppSettingSlice';
import AuthSlice from './slices/AuthSlice';
import miscSlice from '@/redux/reducers/misc';

const store = configureStore({
  reducer: {
    globalSetting: GlobalAppSettingSlice,
    auth: AuthSlice,
    misc: miscSlice
  }
});

export default store;
