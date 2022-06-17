import React from 'react';
import NavBar from '../components/NavBar';
import CheckoutComp from '../components/Checkout';
import ProductTable from '../components/SalesTable';
import Details from '../components/DetailsTable';

const Checkout = () => (
  <div>
    <NavBar />
    <CheckoutComp />
    <ProductTable />
    <Details />
  </div>
);

export default Checkout;
