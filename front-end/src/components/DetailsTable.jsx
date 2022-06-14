import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSellers, postCheckout } from '../API/Request';

const Details = () => {
  const [sellers, setSellers] = useState([]);
  const [address, setAddres] = useState('');
  const [sellerId, setSaller] = useState(0);
  const [homeNumber, setHomeNumber] = useState(0);
  const token = useSelector(({ data }) => data.token.payload);
  const userId = useSelector(({ data }) => data.user.payload.id);
  const tPrice = useSelector(({ data }) => data.total.payload);
  const card = useSelector(({ data }) => data.card.payload);

  const facth = async () => {
    const Sellers = await getSellers(token);
    setSellers(Sellers.data);
    setSaller(Sellers.data[0].id);
  };

  useEffect(() => {
    facth();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      sale: {
        userId,
        sellerId,
        totalPrice: Number(tPrice.replace(',', '.')),
        deliveryAddress: address,
        deliveryNumber: Number(homeNumber),
      },
      products: card.map((product) => ({ id: product.id, quantity: product.quantity })),
    };
    const tests = await postCheckout(order, token);
    console.log(tests);
    navigate('/customer/orders');
  };

  console.log(sellers);

  const fullSallers = sellers.map((seller) => (
    <option key={ seller.id } value={ seller.id }>{seller.name}</option>
  ));
  return (
    <div>
      <h3>Detalhes e Endereço para Entrega</h3>

      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="seller">
          p. vendedora Responsavel
          <select
            id="seller"
            onChange={ ({ target }) => setSaller(target.value) }
          >
            {fullSallers}
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            id="address"
            type="text"
            onChange={ ({ target }) => setAddres(target.value) }
          />
        </label>
        <label htmlFor="homeNumber">
          Número
          <input
            id="homeNumber"
            type="number"
            onChange={ ({ target }) => setHomeNumber(target.value) }
          />
        </label>

        <button type="submit">Finalizar Pedido</button>

      </form>
      {/* <table>
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
      </table> */}
    </div>
  );
};

export default Details;
//
