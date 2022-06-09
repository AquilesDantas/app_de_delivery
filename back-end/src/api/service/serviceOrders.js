const { OrdersModel } = require('../model/ordersModel');

class OrdersService {
  static async findAll(userId) {
    const allSalesId = await OrdersModel.findAll(userId);
    return {
      code: 200,
      message: allSalesId,
  }; 
}

// static async findOne(userId, saleId) {
//   const oneSale = await OrdersModel.findOne(userId, saleId);
//   return {
//     code: 200,
//     message: oneSale,
// }; 
// }
}

module.exports = { OrdersService };