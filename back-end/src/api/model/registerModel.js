const User = require('../../database/models/user');
const { CustomError } = require('../Error/CustomErro');

class RegisterModel {
  static async create(obj) {
    try {
      const newUser = await User.create(obj, { attributes: ['id', 'name', 'email', 'role'] });
      return newUser;   
    } catch (error) {
      throw new CustomError('User already exist', 409);
    }
  }
}

module.exports = { RegisterModel };