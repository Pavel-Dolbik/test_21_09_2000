import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class DatabaseService {
  constructor(@Inject('POSTGRES_CLIENT') private readonly client: Client) {}

  getClient() {
    return this.client;
  }
}
