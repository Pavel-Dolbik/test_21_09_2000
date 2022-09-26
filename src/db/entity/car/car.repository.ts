import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from '../../../core/entity/car/car.dto';
import { DbService } from '../../db.service';

@Injectable()
export class CarRepository {
  constructor(private readonly dbService: DbService) {}

  async insert(payload: CreateCarDto) {
    return (
      await this.dbService.execute(
        `INSERT INTO car (number) VALUES ($1) RETURNING *; `,
        Object.values(payload),
      )
    ).rows[0];
  }

  async findById(id: number, select: string[] = []) {
    return (
      await this.dbService.execute(
        `SELECT ${
          select.length === 0 ? '*' : select.join(', ')
        } FROM car WHERE id = ${id}`,
      )
    ).rows[0];
  }

  async delete(id: number) {
    const dbResponse = await this.dbService.execute(
      `DELETE FROM car WHERE id = $1;`,
      [id],
    );
    if (dbResponse.rowCount === 0) {
      throw new NotFoundException();
    }

    return true;
  }
}
