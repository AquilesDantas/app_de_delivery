const Sale = require('../../database/models/sale');

class SaleModel {
  static async create(sale) {
    const newSale = await Sale.create(sale);
    return newSale;
  }

  static async update(id, data) {
    const updatedSale = await Sale.update(data, { where: { id } }); 
    return updatedSale;
  }
}

module.exports = SaleModel;