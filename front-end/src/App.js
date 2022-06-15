import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

import './App.css';
import CustomerOrders from './pages/CustomerOrders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders" element={ <CustomerOrders /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
