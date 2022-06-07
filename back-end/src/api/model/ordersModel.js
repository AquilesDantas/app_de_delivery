const Sale = require('../../database/models/sale');
const { CustomError } = require('../Error/CustomErro');

class OrdersModel {
  static async findAll(id) {
    try {
      const allSalesId = await Sale.findAll({ where: { id } });
      return allSalesId;   
    } catch (error) {
      throw new CustomError('Not Found', 404);
    }
  }
}

module.exports = { OrdersModel };