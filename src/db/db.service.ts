import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DbService {
  constructor(@Inject('PG_POOL') private pool: Pool) {}

  async execute(query: string, params?: unknown[]) {
    return await this.pool.query(query, params);
  }
}
