const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Movie;