const User = require('../../database/models/user');

class UserModel {
  static async findOne(email) {
    console.log(`aquiiiii----${email}`);
    const use = await User.findOne({ where: { email } });
    console.log(`teste ----${use}`);
    return use;
  }
}

module.exports = UserModel;