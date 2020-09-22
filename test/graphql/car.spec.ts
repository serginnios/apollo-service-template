import { createTestClient } from 'apollo-server-testing';
import { assert } from 'console';
import { Sequelize } from 'sequelize';
import Car from '../../src/db/models/car';
import apolloServer from '../../src/graphql/apolloServer';

jest.mock('../../src/db/sequelize', () => {
  const sequelize = new Sequelize('sqlite::memory:');
  return sequelize;
});

describe('Car', () => {
  beforeEach(async () => {
    await Car.sync();
  });
  afterEach(async () => {
    await Car.drop();
  });

  test('get all', async () => {
    await Car.create({
      name: 'Roadster',
      description: 'Super fast car',
    });
    const { query } = createTestClient(await apolloServer());
    const res = await query({
      query: `query{
        cars {
          id
          name
          description
        }
      }`,
    });
    if (res.data) {
      const carsResult = res.data.cars;
      assert(carsResult.length, 1);
    } else {
      throw new Error(`Test failed due to response ${res}`);
    }
  });

  test('create', async () => {
    const { query } = createTestClient(await apolloServer());
    const res = await query({
      query: `mutation {
        createCar(car: {
          name: "Roadster"
          description: "Super fast car"
        }) {
          id
        }
      }`,
    });
    if (res.data) {
      const d: Car = res.data.createCar;
      assert(d.id.toString(), '1');
    } else {
      throw new Error(`Test failed due to response ${res}`);
    }
  });
});
