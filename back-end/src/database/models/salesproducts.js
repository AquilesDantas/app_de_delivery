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
//     tableName: "sales_products"
//   });
//   return SalesProducts;
// };

const { DataTypes, Model } = require('sequelize');
const { Sequelize } = require('sequelize');
const { development } = require('../config/config');
const User = require('./user');

const sequelize = new Sequelize(development);

class SalesProducts extends Model {}

SalesProducts.init(
  {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'Sale',
    tableName: 'sales',
  }
);

Sale.belongsTo(User, { foreignKey: 'id', as: 'userId' });
Sale.belongsTo(User, { foreignKey: 'id', as: 'sellerId' });
User.hasOne(Sale, { foreignKey: 'userId'});
User.hasOne(Sale, { foreignKey: 'sellerId'});

module.exports = Sale;
