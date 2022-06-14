import React from 'react';

const ProductTable = () => {
  const total = 300;
  const itens = [
    { id: 1, name: 'bebida1', quant: 10, price: 20 },
    { id: 2, name: 'babida2', quant: 10, price: 10 },
  ];
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
        {itens.map((product) => (
          <tr key={ product.id }>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quant}</td>
            <td>{product.price}</td>
            <td>{product.quant * product.price}</td>
            <button type="submit">Remover</button>
          </tr>
        ))}
      </tbody>
      <div>
        <h4>
          Total:
          {' '}
          {total}
        </h4>
      </div>
    </table>
  );
};

export default ProductTable;
