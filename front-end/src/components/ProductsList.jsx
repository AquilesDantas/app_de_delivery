import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
// import { getProducts } from '../API/Request';

const ProductsList = () => {
  const token = useSelector(({ data }) => data.token.payload);
  const [products, setProducts] = useState([]);
  const { data } = products;

  const getProducts = async (auth) => {
    const BASE_URL = 'http://localhost:3001';

    try {
      const cardProducts = axios.get(`${BASE_URL}/customer/products`, {
        headers: {
          Authorization: auth,
        } });

      setProducts(await cardProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(token);
  }, [token]);

  return (
    <div className="cards__products">
      {data && data.map((product) => (
        <Card key={ product.id } style={ { width: '10rem' } }>
          <Card.Img variant="top" src={ product.urlImage } />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>
              R$
              {' '}
              {product.price}
            </Card.Subtitle>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
