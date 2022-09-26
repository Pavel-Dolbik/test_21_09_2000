import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarController } from './core/car/car.controller';
import { CarService } from './core/car/car.service';
import { DbModule } from './db/db.module';

@Module({
  controllers: [CarController],
  providers: [CarService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
  ],
})
export class AppModule {}
