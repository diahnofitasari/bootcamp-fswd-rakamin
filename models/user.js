import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  photo_profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: false, // Nonaktifkan timestamps
});

export default User;
