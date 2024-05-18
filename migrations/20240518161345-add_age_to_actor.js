'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('actor', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true // Jika ingin kolom ini bisa kosong
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('actor', 'age');
  }
};
