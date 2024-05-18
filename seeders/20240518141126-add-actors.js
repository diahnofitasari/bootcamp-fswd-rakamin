'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Menambahkan data aktor
    await queryInterface.bulkInsert('actor', [
      {
        first_name: 'Iqbal',
        last_name: 'Ramadhan',
        last_update: new Date()
      },
      {
        first_name: 'Reza',
        last_name: 'Rahardian',
        last_update: new Date()
      },
      {
        first_name: 'Jeffry',
        last_name: 'Nichole',
        last_update: new Date()
      },
      {
        first_name: 'Amanda',
        last_name: 'Rawles',
        last_update: new Date()
      },
      {
        first_name: 'Michele',
        last_name: 'Ziudith',
        last_update: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Menghapus data aktor
    await queryInterface.bulkDelete('actor', null, {});
  }
};
