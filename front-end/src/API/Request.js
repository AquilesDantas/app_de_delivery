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

export const postAdminRegister = async (token, user) => {
  const { name, email, password, role } = user;
  const newUser = await axios
    .post(`${BASE_URL}/users`,
      {
        name,
        email,
        password,
        role,
      },
      {
        headers: {
          Authorization: token,
        },
      });
  return newUser;
};

export const getSellers = async (token) => axios.get(`${BASE_URL}/sellers`, {
  headers: {
    Authorization: token,
  } });

export const postCheckout = async (order, token) => axios
  .post(`${BASE_URL}/customer/checkout`, order, {
    headers: {
      Authorization: token,
    } });

export const getSaleById = async (id, token) => axios
  .get(`${BASE_URL}/orders/${id}`, {
    headers: {
      Authorization: token,
    } });

export const putStatusOrder = async (id, status, token) => axios
  .patch(`${BASE_URL}/orders/${id}/update`, {
    headers: {
      Authorization: token,
    } });

export const putStatusSellerOrder = async (id, status, token) => axios
  .patch(`${BASE_URL}/orders/${id}/update`, { status }, {
    headers: {
      Authorization: token,
    } });
