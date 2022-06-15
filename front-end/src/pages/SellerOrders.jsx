import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { formattedDate } from '../helpers/validations';

function SellerOrders() {
  const token = useSelector(({ data }) => data.token.payload);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const getOrders = async (auth) => {
    const BASE_URL = 'http://localhost:3001';

    try {
      const cardOrders = await axios.get(`${BASE_URL}/seller/orders`, {
        headers: {
          Authorization: auth,
        } });
      console.log(cardOrders);

      setOrders(cardOrders.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders(token);
  }, [token]);

  const xablau = (id) => {
    navigate(`/seller/orders/${id}`);
  };

  return (
    <>
      <NavBar />
      <div className="orders__list">
        {orders && orders
          .map((order, index) => (
            <a
              href=""
              key={ index }
              onClick={ () => xablau(order.id) }
              // style="text-decoration: none"
            >
              <div className="card__order-ximira">
                <div className="card__order">
                  <h6>Pedido</h6>
                  <h4
                    data-testid={ `seller_orders__element-order-id-${order.id}` }
                  >
                    { index + 1 }
                  </h4>
                </div>
                <h3
                  className="card__order-status"
                  data-testid={ `seller_orders__element-delivery-status-${order.id}` }
                >
                  { order.status }
                </h3>
                <div className="card__order-data">
                  <h5
                    data-testid={ `seller_orders__element-order-date-${order.id}` }
                  >
                    { formattedDate(order.saleDate) }
                  </h5>
                  <h5
                    data-testid={ `seller_orders__element-order-price-${order.id}` }
                  >
                    { order.totalPrice }
                  </h5>
                </div>
                <p
                  data-testid={ `seller_orders__element-card-address-${order.id}` }
                >
                  { order.deliveryAddress }
                  ,
                  { order.deliveryNumber }
                </p>
              </div>
            </a>))}
      </div>
    </>
  );
}

export default SellerOrders;
