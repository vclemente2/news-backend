"use strict";

module.exports = {
  async up(queryInterface, _) {
    return queryInterface.bulkInsert(
      "News",
      [
        {
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          author: "John Doe",
          category_id: getRandomCategoryId(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Dolor Sit Amet",
          description:
            "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: "Jane Smith",
          category_id: getRandomCategoryId(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Consectetur Adipiscing Elit",
          description:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: "Mark Johnson",
          category_id: getRandomCategoryId(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Sed Do Eiusmod Tempor",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: "Sarah Thompson",
          category_id: getRandomCategoryId(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Ut Labore et Dolore",
          description:
            "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          author: "Michael Davis",
          category_id: getRandomCategoryId(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Minim Veniam, Quis Nostrud",
          description:
            "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          author: "Emily Wilson",
          category_id: getRandomCategoryId(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    return queryInterface.bulkDelete("News", null, {});
  }
};

function getRandomCategoryId() {
  return Math.floor(Math.random() * 3) + 1;
}
