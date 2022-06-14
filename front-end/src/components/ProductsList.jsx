import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { setCard, setTotal } from '../slices/selections';
import './ProductList.css';

const ProductsList = () => {
  const token = useSelector(({ data }) => data.token.payload);
  const [products, setProducts] = useState([]);
  const [shopCard, setShopCard] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProducts = async (auth) => {
    const BASE_URL = 'http://localhost:3001';

    try {
      const cardProducts = await axios.get(`${BASE_URL}/customer/products`, {
        headers: {
          Authorization: auth,
        } });

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

  const totalPrice = (array) => {
    const arrayResult = [];
    let arraySum = 0;

    if (array !== undefined) {
      array.map((obj) => arrayResult.push(obj.price * obj.quantity));
      if (Object.keys(arrayResult).length !== 0) {
        arraySum = arrayResult.reduce((soma, i) => soma + i);
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
      setTotalSales(arraySum.toFixed(2).replace(/\./, ','));
      return arraySum;
    }
  };

  const card = () => {
    const pro = [...products];

    const attShop = pro.filter((product) => product.quantity !== 0);

    setShopCard(attShop);
    totalPrice(attShop);
    console.log(shopCard);
  };

  const incQuant = (id) => {
    const pro = [...products];
    pro[id].quantity += 1;
    setProducts(pro);
    card();
  };

  const decQuant = (id) => {
    const pro = [...products];

    if (pro[id].quantity !== 0) {
      pro[id].quantity -= 1;
    }

    setProducts(pro);
    card();
  };

  const handleChange = (target, id) => {
    const pro = [...products];

    pro[id].quantity = +target.value;

    setProducts(pro);
    card();
  };

  const hadleClickCard = () => {
    dispatch(setCard(shopCard));
    dispatch(setTotal(totalSales));
    navigate('/customer/checkout');
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
                  data-testid={ `customer_products__button-card-rm-item-${product.id}` }
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
                  data-testid={ `customer_products__button-card-add-item-${product.id}` }

                >
                  +
                </Button>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>
      <Button
        data-testid="customer_products__button-cart"
        type="button"
        className="btn btn-primary"
        variant=""
        size="lg"
        onClick={ () => hadleClickCard() }
        disabled={ isDisabled }
      >
        R$
        {' '}
        <span data-testid="customer_products__checkout-bottom-value">
          {totalSales}
        </span>
      </Button>
    </Container>
  );
};

export default ProductsList;
