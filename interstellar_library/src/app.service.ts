import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey Developer! Cool Down, get a Coffee, Your NestJS is working fine.';
  }
}
