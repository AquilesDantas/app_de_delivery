import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../slices/selections';
import { validateEmail, validatePassword, validateName } from '../helpers/validations';
import { postRegister } from '../API/Request';

const Register = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [nextPage, setNextPage] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password) && validateName(userName)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [password, email, userName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRegister = e.target;
    const nameRegister = formRegister.name.value;
    const emailRegister = formRegister.email.value;
    const passwordRegister = formRegister.password.value;

    try {
      const response = await postRegister(emailRegister, passwordRegister, nameRegister);
      const { token, user } = response.data;
      dispatch(setUser(user));
      dispatch(setToken(token));
      setHidden(true);
      setNextPage(true);
      formLogin.reset();
    } catch (error) {
      setMessage(error.response.data);
      setHidden(false);
    }
  };

  const form = useRef();

  return (
    <div className="register">
      <Form ref={ form } onSubmit={ (e) => handleSubmit(e) } className="register__form">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="input-name" visuallyHidden className="form__label">
              Nome
            </Form.Label>
            <Form.Control
              data-testid="common_register__input-name"
              id="input-name"
              placeholder="user name"
              name="name"
              type="text"
              className="form__control"
              onChange={ ({ target }) => setUserName(target.value) }
              required
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="input-email" visuallyHidden className="form__label">
              email
            </Form.Label>
            <Form.Control
              data-testid="common_register__input-email"
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
              data-testid="common_register__input-password"
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
              data-testid="common_register__button-register"
              type="submit"
              variant="success"
              size="lg"
              className="form__button"
              disabled={ isDisable }
            >
              CADASTRAR
            </Button>
          </Col>
        </Row>
      </Form>
      {!hidden && (
        <Alert variant="danger" onClose={ () => setHidden(true) } dismissible>
          <Alert.Heading>Ops! Something wrong does not right...</Alert.Heading>
          <span data-testid="common_register__element-invalid_register">
            {message}
          </span>
        </Alert>
      )}
      {nextPage && (<Navigate from="/register" to="/customer/products" />)}
    </div>
  );
};

export default Register;
