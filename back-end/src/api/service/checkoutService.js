const SaleModel = require('../model/saleModel');
const SaleProductModel = require('../model/saleProductModel');
const UserModel = require('../model/userModel');

class CheckoutService {
  static async getSellers() {
    const users = await UserModel.findAll('seller');
    return users;
  }
  
  static async createSale(saleInfo) {
    const saleDate = Date.now();
    const { sale, products } = saleInfo;
    const newSale = await SaleModel.create({ ...sale, saleDate });
    products.forEach((product) => {
      SaleProductModel.create({
        productId: product.id,
        saleId: newSale.id,
        quantity: product.quantity,
      });
    });
    return { newSale, products };
  }
}

module.exports = CheckoutService;
