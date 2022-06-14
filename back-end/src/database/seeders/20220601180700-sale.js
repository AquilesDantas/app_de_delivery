'use strict';

const OrderStatus = require("../../api/util/OrderStatus");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: 3,
        seller_id: 2,
        total_price: 59.5,
        delivery_address: "Endereço",
        delivery_number: 1000,
        status: OrderStatus.pendente,
        sale_date: new Date()
      },
      {
        user_id: 5,
        seller_id: 4,
        total_price: 59.5,
        delivery_address: "Endereço",
        delivery_number: 1000,
        status: OrderStatus.pendente,
        sale_date: new Date()
      },
      {
        user_id: 5,
        seller_id: 2,
        total_price: 59.5,
        delivery_address: "Endereço",
        delivery_number: 1000,
        status: OrderStatus.pendente,
        sale_date: new Date()
      },
      {
        user_id: 3,
        seller_id: 4,
        total_price: 59.5,
        delivery_address: "Endereço",
        delivery_number: 1000,
        status: OrderStatus.pendente,
        sale_date: new Date()
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 59.5,
        delivery_address: "Endereço",
        delivery_number: 1000,
        status: OrderStatus.pendente,
        sale_date: new Date()
      },
      {
        user_id: 5,
        seller_id: 4,
        total_price: 59.5,
        delivery_address: "Endereço",
        delivery_number: 1000,
        status: OrderStatus.pendente,
        sale_date: new Date()
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
