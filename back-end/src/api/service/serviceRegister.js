// const registerModel = require('../model/userModel');
const { ServiceAuth } = require('./serviceAuth');
const { RegisterModel } = require('../model/registerModel');

class registerService {
  static async create(name, email, password) {
    const role = 'costumer';
    const encryptedPassword = ServiceAuth.encrypt(password);
    const newUser = await RegisterModel.create({ name, email, password: encryptedPassword, role });
    return { code: 201,
      message: {
        name,
        email,
        role: role,
      },
    };
  }
}

module.exports = { registerService };