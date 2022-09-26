import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Car } from './car';
import { CreateCarDto } from './car.dto';
import { CarService } from './car.service';

@Controller('car')
@ApiTags('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiBody({ type: Car })
  async insert(@Body() payload: CreateCarDto) {
    return await this.carService.insert(payload);
  }

  @Get('find-by-id/:id')
  async findById(@Param('id') id: number) {
    return await this.carService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.carService.delete(id);
  }
}
