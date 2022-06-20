import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSaleById, putStatusSellerOrder } from '../API/Request';
import './OrderTable.css';
import orderDetailsIds from '../utils/sellerOderDetailsIds';

const SellerOrderTable = () => {
  const { pathname } = useLocation();
  const { params } = matchPath('/seller/orders/:id', pathname);
  const token = useSelector(({ data }) => data.token.payload);
  const [status, setStatus] = useState('');
  const [sale, setSale] = useState();

  const fecth = async () => {
    console.log(params);
    const getSale = await getSaleById(params.id, token);
    setSale(getSale.data);
    setStatus(getSale.data.status);
  };

  const put = async (orderStatus) => {
    const updateStatus = await putStatusSellerOrder(params.id, orderStatus, token);
    console.log(updateStatus);
    setStatus(updateStatus.data);
  };

  useEffect(() => {
    fecth();
  }, []);

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
        <span data-testid={ orderDetailsIds.orderId() }>{sale.id}</span>
        <span data-testid={ orderDetailsIds.sellerName() }>{sale.seller}</span>
        <span data-testid={ orderDetailsIds.orderDate() }>
          {Intl.DateTimeFormat('pt-br').format(Date.parse(sale.saleDate))}
        </span>
        <span data-testid={ orderDetailsIds.deliveryStatus() }>{status}</span>
        <button
          type="button"
          onClick={ () => put('Preparando') }
          data-testid={ orderDetailsIds.preparingCheck() }
          disabled={
            status.match(/preparando/i)
            || status.match(/em trânsito/i)
            || status.match(/entregue/i)
          }
        >
          PREPARAR PEDIDO

        </button>
        <button
          type="button"
          onClick={ () => put('Em Trânsito') }
          data-testid={ orderDetailsIds.dispatchCheck() }
          disabled={
            status.match(/pendente/i)
            || status.match(/em trânsito/i)
            || status.match(/entregue/i)
          }
        >
          SAIU PARA ENTREGA

        </button>
      </div>
      <div>
        <table className="details">
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>SubTotal</th>
          </tr>
          {
            sale.products.map((product, i) => (

              <tr key={ i }>
                <td data-testid={ orderDetailsIds.itemNumber(i) }>{i}</td>
                <td data-testid={ orderDetailsIds.name(i) }>{ product.name }</td>
                <td data-testid={ orderDetailsIds.quantity(i) }>{ product.quantity }</td>
                <td data-testid={ orderDetailsIds.unitPrice(i) }>
                  R$
                  { ' ' }
                  { product.price.replace('.', ',') }
                </td>
                <td data-testid={ orderDetailsIds.subTotal(i) }>
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
          <span data-testid={ orderDetailsIds.totalPrice() }>
            {sale.totalPrice.replace('.', ',')}
          </span>
        </section>
      </div>
    </div>
  );
};

export default SellerOrderTable;
