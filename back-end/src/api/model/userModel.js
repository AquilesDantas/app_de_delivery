const User = require('../../database/models/user');

class UserModel {
  static async findOne(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  static async findAll(role) {
    if (!role) {
      const users = await User.findAll();
      return users;
    }
    const users = await User.findAll({ where: { role } });
    return users;
  }
}

module.exports = UserModel;