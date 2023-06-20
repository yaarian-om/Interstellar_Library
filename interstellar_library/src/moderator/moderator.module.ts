import { Module } from "@nestjs/common";
import { ModeratorController } from "./moderator.controller";
import { ModeratorService } from "./moderator.service";
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookEntity, CustomerEntity, ModeratorEntity, SellerEntity } from "./moderator.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ModeratorEntity, SellerEntity, CustomerEntity, BookEntity])],
    controllers: [ModeratorController],
    providers: [ModeratorService]
})
export class ModeratorModule {}