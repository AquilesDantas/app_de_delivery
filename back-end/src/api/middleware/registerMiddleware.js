const { CustomError } = require('../Error/CustomErro');

class RegisterMiddleware {
  static validate(req, res, next) {
    const { name, email, password } = req.body;
    const isNameValid = RegisterMiddleware.validateName(name);
    const isPasswordValid = RegisterMiddleware.validatePassword(password);
    const isEmailValid = RegisterMiddleware.validateEmail(email);

    if (!isEmailValid || !isPasswordValid || !isNameValid) {
      throw new CustomError('Invalid data', 400);
    }
    return next();
  }

  static validateName(name) {
    return name.length < 12;
  }

  static validatePassword(password) {
    return password && password.length >= 6;
  }

  static validateEmail(email) {
    return email && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }
}

module.exports = { RegisterMiddleware };