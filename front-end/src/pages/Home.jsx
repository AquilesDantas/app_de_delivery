import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  const navigate = useNavigate();

  const redirect = () => navigate('/login', { replace: true });
  useEffect(() => {
    redirect();
  });
  return (
    <Login />
  );
};

export default Home;
