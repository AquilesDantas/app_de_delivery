const { LoginService } = require('../service/seviceLogin');

class LoginController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const { code, message } = await LoginService.login(email, password);
      return res.status(code).json(message);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { LoginController };