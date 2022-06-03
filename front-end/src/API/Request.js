import axios from 'axios';

const baseURL = 'http://localhost:3001';

const postLogin = async (email, password) => axios.post(`${baseURL}/login`, {
  email,
  password,
});

export default postLogin;
