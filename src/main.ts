import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

function initAPIDocs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Ethers Service')
    .setDescription('The Ethers Service API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initAPIDocs(app);

  await app.listen(3000);
}

bootstrap();
