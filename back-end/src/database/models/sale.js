const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sale.belongsTo(models.User,
        { foreignKey: 'id', as: 'userId' });
      Sale.belongsTo(models.User,
        { foreignKey: 'id', as: 'sallerId' });
      // Sale.belongsToMany(models.Product,{
      //   as: '',
      //   through: ,
      //   foreignKey: '',
      //   otherKey: ''
      // });
    }
  }
  Sale.init({
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.NUMBER,
    saleDate: DataTypes.DATETIME,
    status: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'Sale',
  });
  return Sale;
};