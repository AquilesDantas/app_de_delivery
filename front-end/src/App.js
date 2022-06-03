import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <Products /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
