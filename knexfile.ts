import { ConfigService } from '@nestjs/config';
import { Knex } from 'knex';
import { config } from 'dotenv';
import { pgConfig } from './src/db/config/pg-config';
import * as path from 'path';

config();

const configService = new ConfigService();

const knexConfig: Knex.Config = {
  client: 'postgresql',
  connection: pgConfig(configService),
  migrations: {
    directory: path.join(__dirname, './src/db/migrations'),
  },
};

module.exports = knexConfig;
