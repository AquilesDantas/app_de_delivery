import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../API/Request';

const ProductsList = () => {
  const token = useSelector(({ data }) => data.token.payload);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const ximira = async () => {
      setProducts(await getProducts(token));
    };
    ximira();
  }, []);

  console.log(products.data);
  return (
    <p>aqui</p>
  );
};

export default ProductsList;
