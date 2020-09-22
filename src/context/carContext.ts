/* eslint-disable class-methods-use-this */
import { DataSource } from 'apollo-datasource';
import CarCreateInput from '@/graphql/car/type';
import Car from '@/db/models/car';

export default class CarContext extends DataSource {
  async getCars() {
    return Car.findAll();
  }

  async createCar(createCar: CarCreateInput) {
    const car = await Car.create({
      name: createCar.car.name,
      description: createCar.car.description,
    });

    return car;
  }
}
