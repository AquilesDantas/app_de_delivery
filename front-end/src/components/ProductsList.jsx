import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './ProductList.css';
// import { getProducts } from '../API/Request';

const ProductsList = () => {
  const token = useSelector(({ data }) => data.token.payload);
  const [products, setProducts] = useState([]);
  const [shopCard, setShopCard] = useState([]);

  const getProducts = async (auth) => {
    const BASE_URL = 'http://localhost:3001';

    try {
      const cardProducts = await axios.get(`${BASE_URL}/customer/products`, {
        headers: {
          Authorization: auth,
        } });
      console.log(cardProducts.data);
      const productsQty = cardProducts.data.map((product) => {
        product.quantity = 0;
        return product;
      });

      setProducts(productsQty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(token);
  }, [token]);

  const incQuant = (id) => {
    const pro = [...products];
    const shopC = [...shopCard];

    let attShop = [...shopC];

    pro[id].quantity += 1;

    if (shopC.length !== 0) {
      // attShop = shopC.map((product) => {
      //   console.log(id + 1);
      //   console.log('--------------');
      //   console.log(product.id);
      //   if (product.id !== (id + 1)) {
      //     console.log('nao');
      //     return pro[id];
      //   }
      //   product.quantity = pro[id].quantity;
      //   return product;
      // });

      for (let i = 0; shopC.length > i; i += 1) {
        console.log(shopC[i].id);
        console.log(id);
        if (shopC[i].id !== (id + 1)) {
          console.log('ddddddddddd');
          attShop.push(pro[id]);
        } else {
          attShop.push(pro[id]);
        }
      }
    } else {
      attShop.push(pro[id]);
    }

    setShopCard(attShop);

    setProducts(pro);
  };

  const decQuant = (id) => {
    const pro = [...products];

    if (pro[id].quantity !== 0) {
      pro[id].quantity -= 1;
    }

    setProducts(pro);
  };

  const handleChange = (target, id) => {
    const pro = [...products];

    pro[id].quantity = +target.value;

    setProducts(pro);
  };

  return (
    <Container className="cards__products">
      <Row className="justify-content-sm-center">
        {products && products.map((product) => (
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
                  {product.price.replace(/\./, ',') }

                </Card.Subtitle>
                <Button
                  onClick={ () => { decQuant(product.id - 1); } }
                  data-testid={ `customer_products__button-card-add-item-${product.id}` }
                >
                  -
                </Button>
                <input
                  type="number"
                  value={ product.quantity }
                  onChange={ ({ target }) => handleChange(target, product.id - 1) }
                  data-testid={ `customer_products__input-card-quantity-${product.id}` }
                />
                <Button
                  onClick={ () => { incQuant(product.id - 1); } }
                  data-testid={ `customer_products__button-card-rm-item-${product.id}` }

                >
                  +
                </Button>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
