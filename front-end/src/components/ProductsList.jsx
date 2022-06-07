import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ProductList.css';
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
    <Container className="cards__products">
      <Row className="justify-content-sm-center">
        {data && data.map((product) => (
          <Col key={ product.id } sm="6" md="4" lg="3" xl="2">
            <Card>
              <Card.Img
                variant="top"
                src={ product.urlImage }
                style={ { maxWidth: '5rem' } }
              />
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
          </Col>

        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
