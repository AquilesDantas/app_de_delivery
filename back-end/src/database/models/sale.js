// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Sale extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       Sale.belongsTo(models.User,
//         { foreignKey: 'id', as: 'userId' });
//       Sale.belongsTo(models.User,
//         { foreignKey: 'id', as: 'sallerId' });
//     }
//   }
//   Sale.init({
//     totalPrice: DataTypes.NUMBER,
//     deliveryAddress: DataTypes.STRING,
//     deliveryNumber: DataTypes.NUMBER,
//     saleDate: DataTypes.DATE,
//     status: DataTypes.STRING
//   }, {
//     sequelize,
//     underscored: true,
//     timestamps: false,
//     modelName: 'Sale',
//     tableName: 'sales'
//   });
//   return Sale;
// };

const { DataTypes, Model } = require('sequelize');
const { Sequelize } = require('sequelize');
const { development } = require('../config/config');
const User = require('./user');

const sequelize = new Sequelize(development);

class Sale extends Model {
  // static associate(models) {
    
  // }
}

Sale.init(
  {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'Sale',
    tableName: 'sales',
  }
);

Sale.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Sale.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });
User.hasOne(Sale, { foreignKey: 'id'});
User.hasOne(Sale, { foreignKey: 'id'});

module.exports = Sale;
