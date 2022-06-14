import React from 'react';

const Details = () => {
  const sellers = [
    { id: 1, name: 'Fulana Pereira' },
    { id: 2, name: 'Cicrano da Silva' },
  ];
  const fullSallers = sellers.map((seller) => (
    <option key={ seller.id } value={ seller.id }>{seller.name}</option>
  ));
  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <table>
        <thead>
          <tr>
            <th>P. Vendedora Responsável</th>
            <th>Endereço</th>
            <th>Numero</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><select>{fullSallers}</select></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <button type="submit">Finalizar Pedido</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
