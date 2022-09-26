import { Injectable } from '@nestjs/common';
import { CarRepository } from '../../../db/entity/car/car.repository';
import { CreateCarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async insert(payload: CreateCarDto) {
    return await this.carRepository.insert(payload);
  }

  async findById(id: number) {
    return await this.carRepository.findById(id);
  }

  async delete(id: number) {
    return await this.carRepository.delete(id);
  }
}
