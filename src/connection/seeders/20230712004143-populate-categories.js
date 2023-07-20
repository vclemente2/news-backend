"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Jornalismo",
          color: "blue",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Esporte",
          color: "green",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entreterimento",
          color: "yellow",
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
