import { configureStore } from '@reduxjs/toolkit';
import userReducer from './selections';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
