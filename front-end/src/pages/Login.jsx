import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/ZéBirita.jpeg';
import '../App.css';
import postLogin from '../API/Request';
import { Link } from 'react-router-dom';

const Login = () => {
  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(true);

  // useEffect(() => {
  // }, [message]);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formLogin = e.target;
    const emailLogin = formLogin.email.value;
    const passwordLogin = formLogin.password.value;
    try {
      const response = await postLogin(emailLogin, passwordLogin);
      // const { token, user } = response.data;
      // console.log(response);
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
              id="input-email"
              placeholder="email@trybeer.com"
              name="email"
              type="email"
              required
            />
          </label>
          <label htmlFor="input-password">
            <input
              id="input-password"
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </label>

          <button type="submit"> LOGIN </button>
        </form>
        <Link to="/register">
          <button type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
        { !hidden && <span>{ message }</span> } 
      </section>
    </div>
  );
};

export default Login;
