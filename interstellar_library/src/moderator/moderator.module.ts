import { Module } from "@nestjs/common";
import { ModeratorController } from "./moderator.controller";
import { ModeratorService } from "./moderator.service";

@Module({
    imports: [],
    controllers: [ModeratorController],
    providers: [ModeratorService]
})
export class ModeratorModule {}