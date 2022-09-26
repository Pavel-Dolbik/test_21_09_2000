import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { pgConfig } from './config/pg-config';
import { DbService } from './db.service';
import { DataServices } from './services/data-services';

@Module({
  providers: [
    {
      provide: 'PG_POOL',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return new Pool(pgConfig(configService));
      },
    },
    DbService,
    {
      provide: DataServices,
      useClass: DataServices,
    },
  ],
  exports: [DataServices],
})
export class DbModule {}
