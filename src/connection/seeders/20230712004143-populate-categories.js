"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Jornalismo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Esporte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entreterimento",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
