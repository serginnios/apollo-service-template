import { Sequelize } from 'sequelize';
import environment from '../config/environment';

const { database } = environment;

const sequelize = new Sequelize(
  database.name,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: database.dialect,
  },
);

export default sequelize;
