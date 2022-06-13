const AdminService = require('../service/AdminService');

class AdminController {
  static async listAllUsers(_req, res, next) {
    try {
      const { code, message } = await AdminService.listAllUsers();
      return res.status(code).json(message);
    } catch (error) {
      return next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const user = req.body;
      const { code, message } = await AdminService.createUser(user);
      return res.status(code).json(message);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AdminController;