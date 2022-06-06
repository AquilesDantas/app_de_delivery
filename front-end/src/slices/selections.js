import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice(
  {
    name: 'loginUser',
    initialState: {
      user: {
        id: null,
        name: '',
        role: '',
      },
      token: '',
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action;
      },
      setToken: (state, action) => {
        state.token = action;
      },
    },
  },
);

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
