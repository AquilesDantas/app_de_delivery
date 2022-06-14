'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 10
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 5
      },
      {
        sale_id: 2,
        product_id: 1,
        quantity: 10
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 5
      },
      {
        sale_id: 3,
        product_id: 1,
        quantity: 10
      },
      {
        sale_id: 3,
        product_id: 2,
        quantity: 5
      },
      {
        sale_id: 4,
        product_id: 1,
        quantity: 10
      },
      {
        sale_id: 4,
        product_id: 2,
        quantity: 5
      },
      {
        sale_id: 5,
        product_id: 1,
        quantity: 10
      },
      {
        sale_id: 5,
        product_id: 2,
        quantity: 5
      },
      {
        sale_id: 6,
        product_id: 1,
        quantity: 10
      },
      {
        sale_id: 6,
        product_id: 2,
        quantity: 5
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('sales', null, {});
  }
};
