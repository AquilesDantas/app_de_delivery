const UserModel = require('../model/userModel');
const { ServiceAuth } = require('./serviceAuth');

class LoginService {
  static async login(email, password) {
    const userdata = await UserModel.findOne(email);
    if (!userdata) {
      return { code: 404, message: 'User not found' };
    }
    if (!ServiceAuth.authPassword(userdata.password, ServiceAuth.encrypt(password))) {
      return { code: 401, message: 'invalid password' };
    }
    const token = ServiceAuth.getToken(email);
    return { code: 200,
      message: { user: {
        id: userdata.id,
        name: userdata.name,
        role: userdata.role,
      },
      token,
    },
  };
  }
}

module.exports = { LoginService };