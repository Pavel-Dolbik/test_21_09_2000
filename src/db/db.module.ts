import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { CarRepository } from './entity/car/car.repository';
import { pgConfig } from './config/pg-config';
import { DbService } from './db.service';

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
    CarRepository,
  ],
  exports: [DbService, CarRepository],
})
export class DbModule {}
