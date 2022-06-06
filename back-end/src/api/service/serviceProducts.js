const { ProductModel } = require('../model/productsModel');

class ProductsService {
  static async findAll() {
    const allProducts = await ProductModel.findAll();
    return { 
      code: 200,
      message: allProducts,
  }; 
}
}

module.exports = { ProductsService };
