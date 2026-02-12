'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('orders', [
      {
        order_id: "ORD001",
        product: "iPhone 15",
        total_price: "79999",
        created_At: now,
        createdAt: now,
        updatedAt: now
      },
      {
        order_id: "ORD002",
        product: "MacBook Air M2",
        total_price: "99999",
        created_At: now,
        createdAt: now,
        updatedAt: now
      },
      {
        order_id: "ORD003",
        product: "AirPods Pro",
        total_price: "24999",
        created_At: now,
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
