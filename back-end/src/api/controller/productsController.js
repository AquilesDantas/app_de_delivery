const { ProductsService } = require('../service/serviceProducts');
const { ServiceAuth } = require('../service/serviceAuth');

class ProductController {
  static async findAll(req, res, next) {
    const { authorization } = req.headers;

    if (!ServiceAuth.tokenValidation(authorization)) {
      return res.status(401).json('Unauthorized user'); 
    }
  
    try {
      const { code, message } = await ProductsService.findAll();
      return res.status(code).json(message);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { ProductController };