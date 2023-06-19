import { CustomerService } from './Customer/customer.service';
import { CustomerModule } from './Customer/customer.module';
import { CustomerController } from './Customer/customer.controller';
import { SellerService } from './Seller/seller.service';
import { SellerController } from './Seller/seller.controller';
import { SellerModule } from './Seller/seller.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CustomerModule, SellerModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
