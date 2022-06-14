const SaleModel = require('../model/saleModel');
const SaleProductModel = require('../model/saleProductModel');
const UserModel = require('../model/userModel');
const OrderStatus = require('../util/OrderStatus');

class CheckoutService {
  static async getSellers() {
    const users = await UserModel.findAll('seller');
    return users;
  }
  
  static async createSale(saleInfo) {
    const saleDate = Date.now();
    const { sale, products } = saleInfo;
    sale.status = OrderStatus.pendente;
    const newSale = await SaleModel.create({ ...sale, saleDate });
    products.forEach((product) => {
      SaleProductModel.create({
        saleId: newSale.id,
        productId: product.id,
        quantity: product.quantity,
      });
    });
    return { newSale, products };
  }
}

module.exports = CheckoutService;
