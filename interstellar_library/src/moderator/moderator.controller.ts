import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ModeratorService } from "./moderator.service";
import { ModeratorDto } from "./moderator.dto";

@Controller('moderator')
export class ModeratorController {
    constructor(private readonly moderatorService: ModeratorService) {}

    @Get()
    getHello(): string {
        return this.moderatorService.getHello();
    }

    @Get("/customerById/:id")
    getModerator(@Param() id: number): any {
        return this.moderatorService.getCustomerById(id);
    }

    @Get("/sellerById/:id")
    getSeller(@Param() id: number): any {
        return this.moderatorService.getSellerById(id);
    }

    @Get("/customerFeedback/:id")
    getCustomerFeedback(@Param() id: number): any {
        return this.moderatorService.getCustomerFeedback(id);
    }

    @Get("/sellerFeedback/:id")
    getSellerFeedback(@Param() id: number): any {
        return this.moderatorService.getSellerFeedback(id);
    }

    @Get("/books/")
    getAllBooks(): any {
        return this.moderatorService.getAllBooks();
    }

    @Get("/login/")
    login(@Body() data:ModeratorDto): any {
        return this.moderatorService.login(data);
    }

    @Get("/logout/")
    logout(): any {
        return this.moderatorService.logout();
    }

    @Put("/updateCustomer/:id/:name")
    updateCustomer(@Param() id: number, @Param() name: string, @Body() data:ModeratorDto): object {
        console.log(data);
        return this.moderatorService.updateCustomer(id, name, data);
    }

    @Put("/updateSeller/:id/:name")
    updateSeller(@Param() id: number, @Param() name: string, @Body() data:ModeratorDto): object {
        return this.moderatorService.updateSeller(id, name, data);
    }

    @Put("/updateProfile/")
    updateProfile(@Body() data:ModeratorDto): object {
        console.log(data);
        return this.moderatorService.updateProfile(data);
    }

    @Post("/removeBook/:id")
    removeBook(@Param() id: number): any {
        return this.moderatorService.removeBook(id);
    }

    @Post("/deleteAccount/:id")
    deleteAccount(@Param() id: number): any {
        return this.moderatorService.deleteAccount(id);
    }
}