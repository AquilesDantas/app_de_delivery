const Sale = require('../../database/models/sale');

class SaleModel {
  static async create(sale) {
    const newSale = await Sale.create(sale);
    return newSale;
  }
}

module.exports = SaleModel;