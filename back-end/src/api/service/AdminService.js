const { RegisterModel } = require('../model/registerModel');
const UserModel = require('../model/userModel');
const { ServiceAuth } = require('./serviceAuth');

class AdminService {
  static async listAllUsers() {
    const users = await UserModel.findAll();
    return { code: 200, message: users };
  }

  static async createUser({ name, email, password, role }) {
    const encryptedPassword = ServiceAuth.encrypt(password);
    const user = await RegisterModel.create({ name, email, password: encryptedPassword, role });
    return { code: 201, message: user };
  }
}

module.exports = AdminService;