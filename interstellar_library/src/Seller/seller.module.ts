import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

@Module({
    imports: [],
    controllers: [SellerController],
    providers: [SellerService],
})
export class SellerModule {}
