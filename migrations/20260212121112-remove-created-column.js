"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("orders", "createdAt");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("orders", "createdAt", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },
};
