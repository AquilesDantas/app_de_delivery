const { OrdersService } = require("../service/serviceOrders");
const { ServiceAuth } = require("../service/serviceAuth");

class OrdersController {
  static async findAll(req, res, _next) {
    try {
      const { authorization } = req.headers;
      const { id } = ServiceAuth.decodedToken(authorization);

      const { code, message } = await OrdersService.findAll(id);

      return res.status(code).json(message);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  static async findOneBySaleId(req, res, next) {
    try {
      const { id: saleId } = req.params;

      const { code, message: sale } = await OrdersService.findOneBySaleId(
        saleId
      );

      return res.status(code).json(sale);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

module.exports = { OrdersController };
