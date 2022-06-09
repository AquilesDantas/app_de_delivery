const { OrdersModel } = require("../model/ordersModel");

class OrdersService {
  static async findAll(userId) {
    const allSalesId = await OrdersModel.findAll(userId);
    return {
      code: 200,
      message: allSalesId,
    };
  }

  static async findOneBySaleId(saleId) {
    const sale = await OrdersModel.findOneBySaleId(saleId);

    return {
      code: 200,
      message: sale,
    };
  }
}

module.exports = { OrdersService };
