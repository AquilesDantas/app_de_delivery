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
}

module.exports = AdminController;