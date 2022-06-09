const UserModel = require('../model/userModel');

class AdminService {
  static async listAllUsers() {
    const users = await UserModel.findAll();
    return { code: 200, message: users };
  }
}

module.exports = AdminService;