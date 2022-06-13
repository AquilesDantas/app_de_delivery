import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const postLogin = async (email, password) => {
  const user = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  return user;
};

export const postRegister = async (email, password, name) => {
  const newUser = await axios
    .post(`${BASE_URL}/register`, {
      name,
      email,
      password,
    });

  return newUser;
};

// export const getProducts = async (token) => {
//   try {
//     const products = axios.get(`${BASE_URL}/customer/products`, {
//       headers: {
//         Authorization: token,
//       } });

//     return (await products);
//   } catch (error) {
//     console.log(error);
//   }
// };
