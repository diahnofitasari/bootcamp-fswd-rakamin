'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('movies', 'movie_poster', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('movies', 'movie_poster');
  }
};
