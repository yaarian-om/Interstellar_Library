/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AdministratorController } from './administrator.controller';
import { AdministratorService } from './administrator.service';

@Module({
    imports: [],
    controllers: [AdministratorController],
    providers: [AdministratorService],
})
export class AdministratorModule {}
