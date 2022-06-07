import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getProducts } from '../API/Request';
import './ProductsList.css';

const ProductsList = () => {
  const token = useSelector(({ data }) => data.token.payload);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const ximira = async () => {
      setProducts(await getProducts(token));
    };
    ximira();
  }, [token]);

  const cards = (data) => (
    <div className="card" key={ data.id }>
      <section className="card-image">
        <img src={ data.urlImage } alt={ data.name } />
      </section>
      <section className="data-container">
        <h5>{data.name}</h5>
        <h6>{data.price}</h6>
        <Button>
          +
        </Button>
        <Button>
          -
        </Button>
      </section>
    </div>
  );

  const cardList = () => products.data.map((product) => cards(product));
  if (!products.data) {
    return <p>Loading</p>;
  }
  return (
    <div className="container-card">
      {cardList()}
    </div>
  );
};

export default ProductsList;
