const User = require('../../database/models/user');

class UserModel {
  static async findOne(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}

module.exports = UserModel;