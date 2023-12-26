import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

//async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.enableCors();

  // const microservice = app.connectMicroservice({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'hero',
  //     protoPath: join(__dirname, 'hero/hero.proto'),
  //   },  });

  // await app.startAllMicroservicesAsync();
  // await app.listen(3000);
//}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'userproto',
      protoPath: join(__dirname, '/../src/modules/user.proto'),
      url: '0.0.0.0:50052',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'userproto',
  //       protoPath: join(__dirname, '/../src/modules/user.proto'),
  //       url: '0.0.0.0:50052',
  //     },
  //   },
  // );
  // await app.listen();
}
bootstrap();