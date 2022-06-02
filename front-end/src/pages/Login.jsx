import React, { useRef } from 'react';
import logo from '../images/ZéBirita.jpeg';
import '../App.css';
import postLogin from '../API/Request';

const Login = () => {
  // const [isEnable, setIsEnable] = useState(false);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formLogin = e.target;
    const emailLogin = formLogin.email.value;
    const passwordLogin = formLogin.password.value;
    try {
      postLogin(emailLogin, passwordLogin);
      formLogin.reset();
    } catch (error) {
      console.log(error);
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
          <input
            name="password"
            type="password"
            required
          />

          <button type="submit"> LOGIN </button>
        </form>
      </section>
    </div>
  );
};
export default Login;
