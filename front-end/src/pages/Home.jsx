import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <Navigate from="/" to="/login" />
  );
};

export default Home;
