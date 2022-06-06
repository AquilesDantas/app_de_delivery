const Product = require('../../database/models/product');
const { CustomError } = require('../Error/CustomErro');

class ProductModel {
  static async findAll() {
    try {
      const allProducts = await Product.findAll();
      return allProducts;   
    } catch (error) {
      throw new CustomError('Not Found', 404);
    }
  }
}

module.exports = { ProductModel };