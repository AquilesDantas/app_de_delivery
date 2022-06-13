const { ServiceAuth } = require('../service/serviceAuth');

class AuthMiddleware {
  static auhtenticate(req, res, next) {
    const { authorization } = req.headers;

    if (!ServiceAuth.tokenValidation(authorization)) {
      return res.status(401).json('Unauthorized user'); 
    }
    return next();
  }
}

module.exports = AuthMiddleware;
