
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProtousersController } from './protousers.controller';

@Module({
  imports: [
  ],
  controllers: [ProtousersController],
})
export class ProtousersModule {}