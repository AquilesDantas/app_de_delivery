const { registerService } = require('../service/serviceRegister');

class RegisterController {
  static async create(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const { code, message } = await registerService.create(name, email, password);
      return res.status(code).json(message);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { RegisterController };