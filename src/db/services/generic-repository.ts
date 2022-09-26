import { DbService } from '../db.service';

export class GenericRepository<T> {
  private readonly dbService: DbService;
  private table;

  constructor(table: string) {
    this.table = table;
  }

  async insert(entity: T) {
    return await this.dbService.execute(
      `INSERT INTO ${this.table} (${Object.keys(entity)});`,
      Object.values(entity),
    );
  }

  async findById(id: string) {
    return await this.dbService.execute(
      `SELECT * FROM ${this.table} WHERE id = ${id};`,
    );
  }

  async delete(id: string) {
    return await this.dbService.execute(
      `DELETE FROM ${this.table} WHERE id = '${id}';`,
    );
  }
}
