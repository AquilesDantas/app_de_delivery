const SaleModel = require('../model/saleModel');
const UserModel = require('../model/userModel');

class CheckoutService {
  static async getSellers() {
    const users = await UserModel.findAll('seller');
    return users;
  }
  
  static async createSale(sale) {
    const saleDate = Date.now();
    const newSale = await SaleModel.create({ ...sale, saleDate });
    return newSale;
  }
}

module.exports = CheckoutService;
