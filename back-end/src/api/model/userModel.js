const { Op } = require('sequelize');
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
    const users = await User.findAll({
      where: { role },
      attributes: { exclude: ['role', 'password', 'email'] },
    });
    return users;
  }

  static async findAllCustomersAndSellers() {
    const users = await User.findAll({
      where: { role: {
        [Op.not]: 'administrator',
      } },
      attributes: { exclude: ['password'] },
    });
    return users;
  }
}

module.exports = UserModel;
