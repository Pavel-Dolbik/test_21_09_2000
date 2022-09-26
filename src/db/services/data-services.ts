import { OnApplicationBootstrap } from '@nestjs/common';
import { Car } from '../entity/car';
import { GenericRepository } from './generic-repository';

export class DataServices implements OnApplicationBootstrap {
  cars: GenericRepository<Car>;

  onApplicationBootstrap() {
    this.cars = new GenericRepository<Car>(Car.name.toLowerCase());
  }
}
