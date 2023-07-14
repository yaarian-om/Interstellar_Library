import { CustomerService } from './Customer/customer.service';
import { CustomerModule } from './Customer/customer.module';
import { CustomerController } from './Customer/customer.controller';
import { SellerService } from './Seller/seller.service';
import { SellerController } from './Seller/seller.controller';
import { SellerModule } from './Seller/seller.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeratorModule } from './moderator/moderator.module';

@Module({
  imports: [SellerModule, ModeratorModule, CustomerModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin', //Change to your Password
    database: 'Interstellar_Library',
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
