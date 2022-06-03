import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
// import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login />
            }
          />
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
