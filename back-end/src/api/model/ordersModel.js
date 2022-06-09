const Product = require("../../database/models/product");
const Sale = require("../../database/models/sale");
const User = require("../../database/models/user");
const { CustomError } = require("../Error/CustomErro");

class OrdersModel {
  static async findAll(userId) {
    try {
      const allSalesId = await Sale.findAll({ where: { userId } });
      return allSalesId;
    } catch (error) {
      throw new CustomError("Not Found", 404);
    }
  }

  static async findOneBySaleId(saleId) {
    const order = await Sale.findOne({
      where: {
        id: saleId,
      },
      include: [
        {
          model: User, as: 'ximira',
        },
        {
          model: Product, as: 'products',
          through: { attributes: [] }
        },
      ],
    });

    if (!order) throw new CustomError("Not found", 404);

    return order;
  }
}

module.exports = { OrdersModel };
