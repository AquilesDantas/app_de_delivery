// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // User.hasMany(models.Sale,
//       //   { foreignKey: 'userId', as: 'userSale' });
//       //   User.hasMany(models.Sale,
//       //   { foreignKey: 'sallerId', as: 'sallerSale' });
//     }
//   }
//   User.init({
//     id: { type: DataTypes.NUMBER, primaryKey: true },
//     name: DataTypes.STRING,
//     email: { type: DataTypes.STRING, unique: true },
//     password: DataTypes.STRING,
//     role: DataTypes.STRING
//   }, {
//     sequelize,
//     timestamps: false,
//     modelName: 'User',
//   });
//   return User;
// };

// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
//     id: { type: DataTypes.INTEGER, primaryKey: true },
//     name: DataTypes.STRING,
//     email: { type: DataTypes.STRING, unique: true },
//     password: DataTypes.STRING,
//     role: DataTypes.STRING
//   });

//   return User
// }

// module.exports = User;


const {DataTypes, Model} = require('sequelize');
const { Sequelize } = require('sequelize');
const { development } = require('../config/config')

const sequelize = new Sequelize(development);


class User extends Model {

}
User.init({
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      role: DataTypes.STRING
    }, {
      sequelize,
      timestamps: false,
      modelName: 'User',
    });


    module.exports = User;