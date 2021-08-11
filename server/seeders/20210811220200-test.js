'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('test', [
        {
          id: 1,
          name: 'Jerry',
          value: 31,
          created_date: new Date()
        },
        {
          id: 2,
          name: 'George',
          value: 38,
          created_date: new Date()
        },
        {
          id: 3,
          name: 'Elaine',
          value: 28,
          created_date: new Date()
        },
        {
          id: 4,
          name: 'Kramer',
          value: 33,
          created_date: new Date()
        },
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {})
  }
};
