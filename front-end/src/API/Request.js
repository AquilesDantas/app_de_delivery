import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const postLogin = async (email, password) => axios.post(`${baseURL}/login`, {
  email,
  password,
});

export const postRegister = async (email, password, name) => axios
  .post(`${baseURL}/register`, {
    name,
    email,
    password,
  });
