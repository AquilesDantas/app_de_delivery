import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken } from '../slices/selections';

const NavBar = () => {
  const name = useSelector(({ data }) => data.user.payload.name);
  const initialState = {
    id: null,
    name: '',
    role: '',
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const checkout = () => {
    dispatch(setUser(initialState));
    dispatch(setToken(null));
    navigate('/login');
  };

  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">trocar pela logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => navigate('/customer/products') }>
              Produtos
            </Nav.Link>
            <Nav.Item>{ name }</Nav.Item>
            <Nav.Link onClick={ checkout }>sair</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
