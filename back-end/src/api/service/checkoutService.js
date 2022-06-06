const UserModel = require('../model/userModel');

class CheckoutService {
  static async getSellers() {
    const users = await UserModel.findAll('seller');
    
    return CheckoutService.serializeSeller(users);
  }
  
  static serializeSeller(users) {
    return users.map((user) => ({
        id: user.id,
        name: user.name,
      }));
  }
}

module.exports = CheckoutService;
