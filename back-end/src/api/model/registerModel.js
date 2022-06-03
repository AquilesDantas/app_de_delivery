const User = require('../../database/models/user');
const { CustomError } = require('../Error/CustomErro');

class RegisterModel {
  static async create(obj) {
    try {
      console.log(obj);
      const newUser = await User.create(obj);
      return newUser;   
    } catch (error) {
      throw new CustomError('User already exist', 409);
    }
  }
}

module.exports = { RegisterModel };