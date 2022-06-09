const { OrdersModel } = require('../model/ordersModel');

class OrdersService {
  static async findAll(userId) {
    const allSalesId = await OrdersModel.findAll(userId);
    return {
      code: 200,
      message: allSalesId,
    };
  }

  static async findOneBySaleId(saleId) {
    const sale = await OrdersModel.findOneBySaleId(saleId);

    return {
      code: 200,
      message: this.serializeOrder(sale),
    };
  }

  static serializeProducts(products) {
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.SalesProducts.quantity,
    }));
  }

  static serializeOrder(sale) {
    return {
      id: sale.id,
      totalPrice: sale.totalPrice,
      deliveryAddress: sale.deliveryAddress,
      deliveryNumber: sale.deliveryNumber,
      saleDate: sale.saleDate,
      status: sale.status,
      sellerId: sale.sellerId,
      seller: sale.sellerName,
      products: this.serializeProducts(sale.products),
    };
  }
}

module.exports = { OrdersService };
