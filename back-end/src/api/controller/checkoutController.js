const CheckoutService = require('../service/checkoutService');
const { ServiceAuth } = require('../service/serviceAuth');

class CheckoutController {
  static async getSellers(req, res, next) {
    try {
      const { authorization } = req.headers;

      if (!ServiceAuth.tokenValidation(authorization)) {
        return res.status(401).json('Unauthorized user'); 
      }

      const sellers = await CheckoutService.getSellers();
      return res.status(200).json(sellers);
    } catch (error) {
      return next(error);
    }
  }
}
module.exports = CheckoutController;