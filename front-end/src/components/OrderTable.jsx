import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSaleById, putStatusOrder } from '../API/Request';
import './OrderTable.css';

const OrderTable = () => {
  const { pathname } = useLocation();
  const { params } = matchPath('/customer/orders/:id', pathname);
  const token = useSelector(({ data }) => data.token.payload);
  const card = useSelector(({ data }) => data.card.payload);
  const [status, setStatus] = useState('');

  const [sale, setSale] = useState();

  const fecth = async () => {
    const getSale = await getSaleById(params.id, token);
    setSale(getSale.data);
    setStatus(getSale.data.status);
  };

  const put = async () => {
    const updateStatus = await putStatusOrder(params.id, 'entregue', token);
    console.log(updateStatus);
  };

  useEffect(() => {
    fecth();
  }, []);

  console.log(sale);

  if (!sale) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div>
      <div>
        <h2>detalhes do pedido</h2>
      </div>
      <div className="detailPro">
        <span>{sale.id}</span>
        <span>{sale.seller}</span>
        <span>{sale.saleDate}</span>
        <span>{status}</span>
        <button type="button" onClick={ () => put() }>marcar como entregue</button>
      </div>
      <div>
        <table id="details">
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>SubTotal</th>
          </tr>
          {
            card.map((product, i) => (

              <tr key={ i }>
                <td>{i}</td>
                <td>{ product.name }</td>
                <td>{ product.quantity }</td>
                <td>
                  R$
                  { ' ' }
                  { product.price.replace('.', ',') }
                </td>
                <td>
                  R$
                  { ' ' }
                  { (product.quantity * Number(product.price))
                    .toFixed(2).replace('.', ',')}

                </td>
              </tr>
            ))
          }
        </table>
        <section>
          TOTAL:
          {' '}
          R$
          {sale.totalPrice}
        </section>
      </div>
    </div>
  );
};

export default OrderTable;
