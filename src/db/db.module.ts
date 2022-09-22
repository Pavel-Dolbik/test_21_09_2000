import { Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Module({
  providers: [
    {
      provide: 'PG_POOL',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new Pool({
          host: config.get('PG_HOST'),
          port: +config.get('PG_PORT'),
          database: config.get('PG_DB'),
          user: config.get('PG_USER'),
          password: config.get('PG_PASS'),
        });
      },
    },
  ],
})
export class DbModule {}
