import { Controller, Get } from '@nestjs/common';


@Controller('protousers')
export class ProtousersController {

  constructor() {}

  @Get()
  async getProtoUsers() {
    return "hola mundo";
  }
}