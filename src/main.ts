import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Test task')
    .addTag('Cars')
    .addTag('RentSessions')
    .addTag('Price')
    .addTag('Report')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
