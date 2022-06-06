const { ProductsService } = require('../service/serviceProducts');

class ProductController {
  static async findAll(req, res, next) {
    try {
      const { code, message } = await ProductsService.findAll();
      return res.status(code).json(message);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { ProductController };