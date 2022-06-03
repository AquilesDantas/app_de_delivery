import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import postLogin from '../API/Request';
import logo from '../images/ZéBirita.jpeg';
import '../App.css';

const Login = () => {
  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const MAGIC_NUMBER = 6;

  const validatePassword = (pass) => pass && pass.length >= MAGIC_NUMBER;

  const validateEmail = (mail) => mail && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail);

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [password, email]);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formLogin = e.target;
    const emailLogin = formLogin.email.value;
    const passwordLogin = formLogin.password.value;
    try {
      const response = await postLogin(emailLogin, passwordLogin);
      // const { token, user } = response.data;
      console.log(response);
      setHidden(true);
      formLogin.reset();
    } catch (error) {
      setMessage(error.response.data);
      setHidden(false);
    }
  };

  return (
    <div className="login">
      <section className="logo-ze-birita">
        <img className="logo" src={ logo } alt="logo zé birita" />
      </section>
      <Form ref={ form } onSubmit={ (e) => handleSubmit(e) }>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="input-email" visuallyHidden>
              email
            </Form.Label>
            <Form.Control
              data-testid="common_login__input-email"
              id="input-email"
              placeholder="email@trybeer.com"
              name="email"
              type="email"
              onChange={ ({ target }) => setEmail(target.value) }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="input-password" visuallyHidden>
              senha
            </Form.Label>
            <Form.Control
              id="input-password"
              data-testid="common_login__input-password"
              name="password"
              type="password"
              placeholder="password"
              onChange={ ({ target }) => setPassword(target.value) }
              required
            />
          </Col>
          <Col xs="auto">
            <Button
              data-testid="common_login__button-login"
              type="submit"
              disabled={ isDisable }
            >
              LOGIN
            </Button>
          </Col>
        </Row>
      </Form>
      <Link to="/register">
        <Button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </Button>
      </Link>
      {!hidden && (
        <span data-testid="common_login__element-invalid-email">
          {message}
        </span>
      )}
    </div>
  );
};

export default Login;
