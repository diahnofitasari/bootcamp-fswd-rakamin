import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('express_hw_09', 'postgres', '13juni1994', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
