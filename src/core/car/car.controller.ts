import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Car } from '../../db/entity/car';
import { CarService } from './car.service';

@Controller('car')
@ApiTags('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiBody({ type: Car })
  async insert(@Body() payload: Car) {
    return await this.carService.insert(payload);
  }
}
