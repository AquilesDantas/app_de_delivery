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
              <section className="card_image">
                <Card.Img
                  data-testid={ `customer_products__img-card-bg-image-${product.id}` }
                  variant="top"
                  src={ product.urlImage }
                  style={ { maxWidth: '163px',
                    maxHeight: '163px' } }
                />
              </section>
              <Card.Body>
                <Card.Title
                  data-testid={ `customer_products__element-card-title-${product.id}` }
                >
                  {product.name}

                </Card.Title>
                <Card.Subtitle
                  data-testid={ `customer_products__element-card-price-${product.id}` }
                >
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
