// const registerModel = require('../model/userModel');
const { ServiceAuth } = require('./serviceAuth');

class registerService {
  static async create(name, email, password) {
    // const userdata = await UserModel.findOne(email);
    // if (!userdata) {
    //   return { code: 401, message: 'User not found' };
    // }
    // if (!ServiceAuth.authPassword(userdata.password, ServiceAuth.encrypt(password))) {
    //   return { code: 401, message: 'invalid password' };
    // }
    const encryptedPassword = ServiceAuth.encrypt(password);
    return { code: 201,
      message: {
        // id: userdata.id,
        name,
        email,
        password: encryptedPassword,
        role: 'costumer',
      },
    };
  }
}

module.exports = { registerService };