import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity, BookEntity, FeedbackEntity, SellerEntity } from './seller.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SellerEntity,BookEntity,FeedbackEntity,AddressEntity]),],
    controllers: [SellerController],
    providers: [SellerService],
})
export class SellerModule {}
