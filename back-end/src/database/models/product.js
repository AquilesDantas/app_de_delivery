// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Product extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Product.init({
//     name: DataTypes.STRING,
//     price: DataTypes.DECIMAL(4,2),
//     urlImage: DataTypes.STRING
//   }, {
//     sequelize,
//     underscored: true,
//     timestamps: false,
//     modelName: 'Product',
//     tableName: 'products'
//   });

  
  // module.exports = { Product };
  // return Product;
// };

// ------------------------------------------------------------------

const { DataTypes, Model } = require("sequelize");
const { Sequelize } = require("sequelize");
const { development } = require("../config/config");

const sequelize = new Sequelize(development);

class Product extends Model {}
Product.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(4,2),
  urlImage: DataTypes.STRING
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'Product',
  tableName: 'products'
});

module.exports = Product;
