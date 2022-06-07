import React from 'react';
import NavBar from '../components/NavBar';
import ProductsList from '../components/ProductsList';

const products = () => (
  <div className="products">
    <NavBar />
    <ProductsList />
  </div>
);

export default products;
