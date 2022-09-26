import { Injectable } from '@nestjs/common';
import { Car } from '../../db/entity/car';
import { DataServices } from '../../db/services/data-services';

@Injectable()
export class CarService {
  constructor(private readonly dataServices: DataServices) {}

  async insert(payload: Car) {
    return await this.dataServices.cars.insert(payload);
  }
}
