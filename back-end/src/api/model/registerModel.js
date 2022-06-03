const User = require('../../database/models/user');

class registerModel {
  static async create(obj) {
    const newUser = await User.create(obj);
    return newUser;
  }
}

module.exports = registerModel;