'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
      id: "1",
      name: 'Headset',
      price: "100000"
    },
    {
      id: "2",
      name: 'Powerbank',
      price: "125000"
    },
    {
      id: "3",
      name: 'Charger',
      price: "125000"
    },
    {
      name: 'P47 Headphone',
      price: "55000"
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', {});
  }
};
