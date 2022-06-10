import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken } from '../slices/selections';
import TagP from '../assets/tagP.png';
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
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-sm-center">
        <Navbar.Brand href="#home">
          <img className="logo__ze-birita" src={ TagP } alt="logo zé birita" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={ () => navigate('/customer/products') }
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Nav.Link>
          <Nav.Link
            onClick={ () => navigate('/customer/products') }
            data-testid="customer_products__element-navbar-link-orders"
          >
            Pedidos
          </Nav.Link>
          <Nav.Item
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </Nav.Item>
          <Nav.Link
            onClick={ checkout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
