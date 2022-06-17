import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setToken } from '../slices/selections';
import TagP from '../assets/tagP.png';
import { postAdminRegister } from '../API/Request';
import { validateEmail, validateName, validatePassword } from '../helpers/validations';
import '../components/NavBar.css';

function AdminManage() {
  const name = useSelector(({ data }) => data.user.payload.name);
  const token = useSelector(({ data }) => data.token.payload);

  const initialState = {
    id: null,
    name: '',
    role: '',
  };
  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkout = () => {
    dispatch(setUser(initialState));
    dispatch(setToken(null));
    localStorage.clear();
    navigate('/login');
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRegister = e.target;
    const nameRegister = formRegister.nome.value;
    const emailRegister = formRegister.email.value;
    const passwordRegister = formRegister.password.value;
    const typeRegister = formRegister.tipo.value;

    try {
      await postAdminRegister(
        token,
        nameRegister,
        emailRegister,
        passwordRegister,
        typeRegister,
      );
      
      // console.log(response);
      setHidden(true);
      formRegister.reset();
    } catch (error) {
      console.log(error);
      setMessage(error.response.data);
      setHidden(false);
    }
  };

  useEffect(() => {
    if (validateName(userName)
      && validateEmail(email)
      && validatePassword(password)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [userName, password, email]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-sm-center">
          <Navbar.Brand href="#home">
            <img className="logo__ze-birita" src={ TagP } alt="logo zé birita" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={ () => navigate('/') }
              data-testid="customer_products__element-navbar-link-orders"
            >
              Gerenciar Usuários
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
      <h3>Cadatrar novo usuário</h3>
      <Form ref={ form } onSubmit={ (e) => handleSubmit(e) }>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="input-name">Nome</Form.Label>
              <Form.Control
                data-testid="admin_manage__input-name"
                id="input-name"
                name="nome"
                onChange={ ({ target }) => setUserName(target.value) }
                placeholder="nome e sobrenome"
                required
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="input-email">Email</Form.Label>
              <Form.Control
                data-testid="admin_manage__input-email"
                type="email"
                id="input-email"
                name="email"
                onChange={ ({ target }) => setEmail(target.value) }
                placeholder="seu_email@mail.com"
                required
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="input-password">Senha</Form.Label>
              <Form.Control
                data-testid="admin_manage__input-password"
                type="password"
                id="input-password"
                name="password"
                onChange={ ({ target }) => setPassword(target.value) }
                required
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="type-select">Tipo</Form.Label>
              <Form.Select
                data-testid="admin_manage__select-role"
                id="type-select"
                name="tipo"
                defaultValue="customer"
              >
                <option>customer</option>
                <option>saller</option>
                <option>administrator</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button
              data-testid="admin_manage__button-register"
              type="submit"
              disabled={ isDisable }
            >
              Cadastrar
            </Button>
          </Col>
        </Row>
      </Form>
      {!hidden && (
        <Alert variant="danger" onClose={ () => setHidden(true) } dismissible>
          <Alert.Heading>Ops! Something wrong does not right...</Alert.Heading>
          <span>
            {message}
          </span>
        </Alert>
      )}
    </>
  );
}

export default AdminManage;
