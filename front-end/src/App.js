import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ } /> */}
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
