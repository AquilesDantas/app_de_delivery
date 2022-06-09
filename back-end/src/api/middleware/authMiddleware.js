const { CustomError } = require('../Error/CustomErro');
const { ServiceAuth } = require('../service/serviceAuth');

class AuthMiddleware {
  static authenticate(req, res, next) {
    const { authorization } = req.headers;
    try {
      if (!ServiceAuth.tokenValidation(authorization)) {
        return res.status(401).json('Unauthorized user'); 
      }
    } catch (error) {
      throw new CustomError('Invalid token', 401);
    }
    return next();
  }
}

module.exports = AuthMiddleware;
