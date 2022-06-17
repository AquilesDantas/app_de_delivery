import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setToken } from '../slices/selections';
import { postLogin } from '../API/Request';
import logo from '../assets/ZéBirita.jpeg';
import { validateEmail, validatePassword } from '../helpers/validations';
import './Login.css';

const Login = () => {
  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dataUser = useSelector(({ data }) => data.user.payload);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const redirect = (role) => {
    if (role === 'customer') {
      navigate('/customer/products');
    } else if (role === 'seller') {
      navigate('/seller/orders');
    } else if (role === 'administrator') {
      navigate('/admin/manage');
    }
  };

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [password, email]);

  const form = useRef();

  const setStorage = (name, role, token) => {
    const user = {
      name,
      email,
      role,
      token,
    };

    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formLogin = e.target;
    const emailLogin = formLogin.email.value;
    const passwordLogin = formLogin.password.value;
    try {
      const response = await postLogin(emailLogin, passwordLogin);
      const { token, user } = response.data;
      dispatch(setUser(user));
      dispatch(setToken(token));
      setStorage(user.name, user.role, token);
      setHidden(true);
      redirect(user.role);
      formLogin.reset();
    } catch (error) {
      console.log(error);
      setMessage(error.response.data);
      setHidden(false);
    }
  };

  return (
    <div className="login">
      <section className="logo__ze-birita">
        <img className="logo__ze-birita__img" src={ logo } alt="logo zé birita" />
      </section>
      <Form ref={ form } onSubmit={ (e) => handleSubmit(e) } className="login__form">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="input-email" visuallyHidden className="form__label">
              email
            </Form.Label>
            <Form.Control
              data-testid="common_login__input-email"
              id="input-email"
              placeholder="email@trybeer.com"
              name="email"
              type="email"
              className="form__control"
              onChange={ ({ target }) => setEmail(target.value) }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="input-password" visuallyHidden className="form__label">
              senha
            </Form.Label>
            <Form.Control
              id="input-password"
              data-testid="common_login__input-password"
              name="password"
              type="password"
              placeholder="password"
              className="form__control"
              onChange={ ({ target }) => setPassword(target.value) }
              required
            />
          </Col>
          <Col xs="auto">
            <Button
              data-testid="common_login__button-login"
              type="submit"
              variant="success"
              size="lg"
              className="form__button"
              disabled={ isDisable }
            >
              LOGIN
            </Button>
          </Col>
        </Row>
      </Form>
      <Link to="/register">
        <Button
          data-testid="common_login__button-register"
          type="button"
          className="button__register"
          variant="primary"
          size="lg"
        >
          Ainda não tenho conta
        </Button>
      </Link>
      {!hidden && (
        <Alert variant="danger" onClose={ () => setHidden(true) } dismissible>
          <Alert.Heading>Ops! Something wrong does not right...</Alert.Heading>
          <span data-testid="common_login__element-invalid-email">
            {message}
          </span>
        </Alert>
      )}
    </div>
  );
};

export default Login;
