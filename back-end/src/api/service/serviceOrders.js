const { CustomError } = require('../Error/CustomErro');
const { OrdersModel } = require('../model/ordersModel');
const SaleModel = require('../model/saleModel');

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

  static async updateSaleStatus(id, status) {
    const [saleDidUpdate] = await SaleModel.update(id, { status });
    if (!saleDidUpdate) {
      throw new CustomError('Not found', 404);
    }
    return { code: 200, message: status };
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
      seller: sale.seller.name,
      products: this.serializeProducts(sale.products),
    };
  }
}

module.exports = { OrdersService };
