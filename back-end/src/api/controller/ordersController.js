const { OrdersService } = require('../service/serviceOrders');
const { ServiceAuth } = require('../service/serviceAuth');

class OrdersController {
  static async findAll(req, res, _next) {
    const { authorization } = req.headers;
    const { id } = ServiceAuth.decodedToken(authorization);
  
      const { code, message } = await OrdersService.findAll(id);

      return res.status(code).json(message);
  }
}

module.exports = { OrdersController };