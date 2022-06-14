const CheckoutService = require('../service/checkoutService');

class CheckoutController {
  static async getSellers(req, res, next) {
    try {
      const sellers = await CheckoutService.getSellers();
      return res.status(200).json(sellers);
    } catch (error) {
      return next(error);
    }
  }

  static async createSale(req, res, next) {
    try {
      const saleInfo = req.body;
      const newSale = await CheckoutService.createSale(saleInfo);
      return res.status(201).json(newSale);
    } catch (error) {
      return next(error);
    }
  }
}
module.exports = CheckoutController;