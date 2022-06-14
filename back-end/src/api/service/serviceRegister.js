// const registerModel = require('../model/userModel');
const { ServiceAuth } = require('./serviceAuth');
const { RegisterModel } = require('../model/registerModel');
const UserRoles = require('../util/UserRoles');

class registerService {
  static async create(name, email, password) {
    const role = UserRoles.client;
    const encryptedPassword = ServiceAuth.encrypt(password);
    const newUser = await RegisterModel.create({ name, email, password: encryptedPassword, role });
    const token = ServiceAuth.getToken(newUser.id, email);
    return { code: 201,
      message: { user: {
        id: newUser.id,
        name: newUser.name,
        role: newUser.role,
      },
      token,
    },
  }; 
}
}

module.exports = { registerService };
