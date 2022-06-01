'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        primaryKey: true,
        references: { model: 'sales', key: 'id' },
        field: 'sale_id',
        type: Sequelize.INTEGER
      },
      productId: {
        primaryKey: true,
        references: { model: 'products', key: 'id' },
        field: 'product_id',
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};