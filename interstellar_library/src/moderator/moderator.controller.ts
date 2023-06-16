import { Controller, Get, Param } from "@nestjs/common";
import { ModeratorService } from "./moderator.service";

@Controller('moderator')
export class ModeratorController {
    constructor(private readonly moderatorService: ModeratorService) {}

    @Get()
    getHello(): string {
        return this.moderatorService.getHello();
    }

    @Get("/customerId/:id")
    getModerator(@Param() id: number): any {
        return this.moderatorService.getCustomerById(id);
    }
}
