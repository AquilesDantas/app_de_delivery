import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ZéBirita.jpeg';
import '../App.css';
import postLogin from '../API/Request';

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
    <div>
      <section>
        <img className="logo" src={ logo } alt="logo zé birita" />
      </section>
      <section>
        <form ref={ form } onSubmit={ (e) => handleSubmit(e) }>
          <label htmlFor="input-email">
            Login
            <input
              data-testid="common_login__input-email"
              id="input-email"
              placeholder="email@trybeer.com"
              name="email"
              type="email"
              onChange={ ({ target }) => setEmail(target.value) }
              required
            />
          </label>
          <label htmlFor="input-password">
            <input
              id="input-password"
              data-testid="common_login__input-password"
              name="password"
              type="password"
              placeholder="password"
              onChange={ ({ target }) => setPassword(target.value) }
              required
            />
          </label>

          <button
            data-testid="common_login__button-login"
            type="submit"
            disabled={ isDisable }
          >
            LOGIN
          </button>
        </form>
        <Link to="/register">
          <button data-testid="common_login__button-register" type="button">
            Ainda não tenho conta
          </button>
        </Link>
        {!hidden && (
          <span data-testid="common_login__element-invalid-email">
            {message}
          </span>
        )}
      </section>
    </div>
  );
};

export default Login;
