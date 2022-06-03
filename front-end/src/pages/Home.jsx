import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => (
  <Navigate from="/" to="/login" />
);

export default Home;
