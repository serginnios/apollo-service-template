import { Sequelize } from 'sequelize';

jest.mock('../../src/db/sequelize', () => {
  const sequelize = new Sequelize('sqlite::memory:');
  return sequelize;
});
