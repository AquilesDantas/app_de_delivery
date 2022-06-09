const Sale = require('../../database/models/sale');
const { CustomError } = require('../Error/CustomErro');

class OrdersModel {
  static async findAll(userId) {
    try {
      const allSalesId = await Sale.findAll({ where: { userId } });
      return allSalesId;   
    } catch (error) {
      throw new CustomError('Not Found', 404);
    }
  }

  // static async findOne(userId, saleId) {
  //   try {
  //     const allSalesId = await Sale.findAll({ where: { userId } });
  //     const selectSale = allSalesId.filter((sale) => sale.id === saleId);
  //     return selectSale;   
  //   } catch (error) {
  //     throw new CustomError('Not Found', 404);
  //   }
  // }
}

module.exports = { OrdersModel };