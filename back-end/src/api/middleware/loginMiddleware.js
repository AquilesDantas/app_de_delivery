const { CustomError } = require('../Error/CustomErro');

class LoginMiddleware {
  static validate(req, res, next) {
    const { email, password } = req.body;
    const isPasswordValid = LoginMiddleware.validatePassword(password);
    const isEmailValid = LoginMiddleware.validateEmail(email);

    if (!isEmailValid || !isPasswordValid) {
      throw new CustomError('Invalid email or password', 400);
    }
    return next();
  }  

  static validatePassword(password) {
    return password && password.length >= 5;
  }

  static validateEmail(email) {
    return email && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }
}

module.exports = { LoginMiddleware };