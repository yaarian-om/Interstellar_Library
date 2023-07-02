import { Module } from "@nestjs/common";
import { ModeratorController } from "./moderator.controller";
import { ModeratorService } from "./moderator.service";
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity, ModeratorEntity} from "./moderator.entity";
import { BookEntity, FeedbackEntity, SellerEntity } from "src/Seller/seller.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ModeratorEntity, SellerEntity, FeedbackEntity ,CustomerEntity, BookEntity])],
    controllers: [ModeratorController],
    providers: [ModeratorService]
})
export class ModeratorModule {}