import { ConfigService } from '@nestjs/config';

export const pgConfig = (configService: ConfigService) => {
  return {
    host: configService.get('PG_HOST'),
    port: +configService.get('PG_PORT'),
    database: configService.get('PG_DB'),
    user: configService.get('PG_USER'),
    password: configService.get('PG_PASS'),
  };
};
