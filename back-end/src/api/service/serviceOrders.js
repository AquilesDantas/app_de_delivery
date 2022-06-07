const { OrdersModel } = require('../model/ordersModel');
// const UserModel = require('../model/userModel');

class OrdersService {
  static async findAll(id) {
    const user = await OrdersModel.findAll(id);
    return { 
      code: 200,
      message: user,
  }; 
}
}

module.exports = { OrdersService };