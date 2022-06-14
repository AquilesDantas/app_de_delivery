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
      card: [],
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action;
      },
      setToken: (state, action) => {
        state.token = action;
      },
      setCard: (state, action) => {
        state.card = action;
      },
    },
  },
);

export const { setUser, setToken, setCard } = userSlice.actions;
export default userSlice.reducer;