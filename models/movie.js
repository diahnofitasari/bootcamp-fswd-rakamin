import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genres: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  movie_poster: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'movies',
  timestamps: false, // Nonaktifkan timestamps
});

export default Movie;
