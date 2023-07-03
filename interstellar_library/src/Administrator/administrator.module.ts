/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AdministratorController } from './administrator.controller';
import { AdministratorService } from './administrator.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity} from './administrator.entity';
import { SellerEntity } from 'src/Seller/seller.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,SellerEntity]),],
    controllers: [AdministratorController],
    providers: [AdministratorService],
})
export class AdministratorModule {}
