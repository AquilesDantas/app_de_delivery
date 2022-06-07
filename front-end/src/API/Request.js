import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const postLogin = async (email, password) => {
  try {
    const user = axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });

    return (await user);
  } catch (error) {
    console.log(error);
  }
};

export const postRegister = async (email, password, name) => {
  try {
    const newUser = axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      });

    return (await newUser);
  } catch (error) {
    console.log(error);
  }
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
