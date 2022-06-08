const { OrdersService } = require('../service/serviceOrders');
const { ServiceAuth } = require('../service/serviceAuth');

class OrdersController {
  static async findAll(req, res, _next) {
    const { authorization } = req.headers;
    const { id } = ServiceAuth.decodedToken(authorization);
  
      const { code, message } = await OrdersService.findAll(id);

      return res.status(code).json(message);
  }

  static async findOne(req, res, _next) {
    const { authorization } = req.headers;
    const { id: saleId } = req.params;
   
    const { id: userId } = ServiceAuth.decodedToken(authorization);
  
      const { code, message: allSales } = await OrdersService.findAll(userId);

      const selectSale = allSales.filter((sale) => sale.id === Number(saleId));

      return res.status(code).json(selectSale);
  }
}

module.exports = { OrdersController };