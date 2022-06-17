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
      total: 0,
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
      setTotal: (state, action) => {
        state.total = action;
      },
    },
  },
);

export const { setUser, setToken, setCard, setTotal } = userSlice.actions;
export default userSlice.reducer;
