import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ModeratorService } from "./moderator.service";
import { CustomerDto, ModeratorDto, SellerDto } from "./moderator.dto";

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
    getSeller(@Param() id: SellerDto, @Body() data:SellerDto): any {
        return this.moderatorService.getSellerById(id,data);
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

    //@Get("/login/:email/:password")
    //login(@Param() email:string, @Param() password:string,@Body() data:ModeratorDto): any {
    //    return this.moderatorService.login(email, password, data);
    //}

    @Post("/login/")
    @UsePipes(new ValidationPipe())
    login(@Query() qry:ModeratorDto,@Body() data:ModeratorDto): any {
        console.log(qry, data);
        return this.moderatorService.login(qry,  data);
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

    @Put('/updateProfile/')
    @UsePipes(new ValidationPipe())
    updateProfile(@Body() data:ModeratorDto): object {
        console.log(data);
        return this.moderatorService.updateProfile(data);
    }

    @Post("/removeBook/:id")
    removeBook(@Param() id: number,ParseIntPipe): any {
        return this.moderatorService.removeBook(id);
    }

    @Post("/deleteAccount/:id")
    deleteAccount(@Param() id: number): any {
        return this.moderatorService.deleteAccount(id);
    }
}

