'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: 'Abc@1234',
        name:'Ánh Vũ',
        address: 'Nam Định',
        roleid: 'admin',
        phone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
