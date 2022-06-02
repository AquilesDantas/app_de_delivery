import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
