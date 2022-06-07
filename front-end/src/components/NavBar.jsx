import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken } from '../slices/selections';
import LOGO_ZE from '../assets/ZéBirita.jpeg';
import './NavBar.css';

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
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-sm-center">
        <Navbar.Brand href="#home">
          <img className="logo__ze-birita" src={ LOGO_ZE } alt="logo zé birita" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ () => navigate('/customer/products') }>
            Produtos
          </Nav.Link>
          <Nav.Item>{ name }</Nav.Item>
          <Nav.Link onClick={ checkout }>sair</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
