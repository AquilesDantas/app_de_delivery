const SalesProducts = require('../../database/models/salesproducts');

class SaleProductModel {
  static create(saleProduct) {
    return SalesProducts.create(saleProduct);
  }
}

module.exports = SaleProductModel;