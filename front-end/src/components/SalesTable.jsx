import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCard, setTotal } from '../slices/selections';
import checkoutIds from '../utils/checkoutIds';

const ProductTable = () => {
  const totalSale = useSelector(({ data }) => data.total.payload);
  const sales = useSelector(({ data }) => data.card.payload);

  const [itens, setItens] = useState(sales);
  const [total, setTotalSale] = useState(Number(totalSale.replace(',', '.')));

  const dispatch = useDispatch();

  const handleClick = (index) => {
    const attItens = [...itens];
    const { price, quantity } = attItens[index];
    const interTotal = total - (Number(price) * quantity);
    setTotalSale(interTotal);
    attItens.splice(index, 1);
    setItens(attItens);
    dispatch(setCard(attItens));
    dispatch(setTotal(interTotal.toFixed(2).replace('.', ',')));
  };

  return (
    <table class="details">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {itens.map((product, index) => (
          <tr key={ product.id }>
            <td
              data-testid={ checkoutIds.itemNumberId(index) }
            >
              {index + 1}
            </td>
            <td data-testid={ checkoutIds.itemNameId(index) }>{product.name}</td>
            <td data-testid={ checkoutIds.itemQuantityId(index) }>
              {product.quantity}
            </td>
            <td data-testid={ checkoutIds.itemPriceId(index) }>
              {product.price.replace('.', ',')}
            </td>
            <td data-testid={ checkoutIds.itemSubTotalId(index) }>
              {(product.quantity * Number(product.price)).toFixed(2)
                .replace('.', ',')}

            </td>
            <div class="d-grid gap-2">
              <button
                type="submit"
                class="btn btn-warning"
                onClick={ () => handleClick(index) }
                data-testid={ checkoutIds.itemRemovalId(index) }
              >
                Remover
              </button>
            </div>
          </tr>
        ))}
      </tbody>
      <div>
        <h4 data-testid={ checkoutIds.totalPriceID() }>
          Total:
          {' '}
          {total.toFixed(2).replace('.', ',')}
        </h4>
      </div>
    </table>
  );
};

export default ProductTable;
