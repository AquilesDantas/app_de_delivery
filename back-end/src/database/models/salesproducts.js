// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class SalesProducts extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   SalesProducts.init({
//     saleId: DataTypes.NUMBER,
//     productId: DataTypes.NUMBER,
//     quantity: DataTypes.NUMBER
//   }, {
//     sequelize,
//     underscored: true,
//     timestamps: false,
//     modelName: 'SalesProducts',
//     tableName: 'sales_products'
//   });
//   return SalesProducts;
// };

const { DataTypes, Model } = require('sequelize');
const { Sequelize } = require('sequelize');
const { development } = require('../config/config');
const Product = require('./product');
const Sale = require('./sale');

const sequelize = new Sequelize(development);

class SalesProducts extends Model {}

SalesProducts.init(
  {
    quantity: DataTypes.INTEGER,
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'SalesProducts',
    tableName: 'sales_products',
  }
);

Product.belongsToMany(Sale, {
  foreignKey: 'saleId',
  as: 'sales',
  through: SalesProducts,
  other: 'productId',
});

Sale.belongsToMany(Product, {
  foreignKey: 'productId',
  as: 'products',
  through: SalesProducts,
  other: 'saleId',
});

module.exports = SalesProducts;
