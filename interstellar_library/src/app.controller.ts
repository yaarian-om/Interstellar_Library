import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // getHello(): string {
  //   return "Hey Developer! Cool Down, get a Coffee, Your NestJS is working fine.";
  // }


}
