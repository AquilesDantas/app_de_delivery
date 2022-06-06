import { configureStore } from '@reduxjs/toolkit';
import userReducer from './selections';

const store = configureStore({
  reducer: {
    data: userReducer,
  },
});

export default store;
