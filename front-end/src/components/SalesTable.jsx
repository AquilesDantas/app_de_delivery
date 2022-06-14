import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCard, setTotal } from '../slices/selections';

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
    <table>
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
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price.replace('.', ',')}</td>
            <td>
              {(product.quantity * Number(product.price)).toFixed(2)
                .replace('.', ',')}

            </td>
            <button type="submit" onClick={ () => handleClick(index) }>Remover</button>
          </tr>
        ))}
      </tbody>
      <div>
        <h4>
          Total:
          {' '}
          {total.toFixed(2).replace('.', ',')}
        </h4>
      </div>
    </table>
  );
};

export default ProductTable;
