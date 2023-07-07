import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Session, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { ModeratorService } from "./moderator.service";
import { ModeratorDto, ModeratorLoginDto } from "./moderator.dto";
import { SellerDTO } from "src/Seller/seller.dto";
import session = require("express-session") ;
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";

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
    getSeller(@Param() id: SellerDTO, @Body() data:SellerDTO): any {
        return this.moderatorService.getSellerById(id,data);
    }

    @Get("/customerFeedback/:id")
    getCustomerFeedback(): any {
        return this.moderatorService.getCustomerFeedback();
    }

    @Get("/sellerFeedback/:id")
    getSellerFeedback(): any {
        return this.moderatorService.getSellerFeedback();
    }

    @Get("/books/")
    getAllBooks(): any {
        return this.moderatorService.getAllBooks();
    }

    //@Get("/login/:email/:password")
    //login(@Param() email:string, @Param() password:string,@Body() data:ModeratorDto): any {
    //    return this.moderatorService.login(email, password, data);
    //}
    @Post("/register/")
    @UsePipes(new ValidationPipe())
    register(@Body() data:ModeratorDto): any {
        return this.moderatorService.register(data);
    }

    @Post("/login/")
    login(@Body() data:ModeratorLoginDto, @Session() session): any {
        return this.moderatorService.Login(data)
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
    @UseInterceptors(FileInterceptor('image',
    {
        fileFilter: (req, file, cb) => {
            if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                cb(null, true);
            else {
                cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
            }
        },
        limits: { fileSize: 30000 },
        storage: diskStorage({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname)
            },
        })
    }
    ))
    @UsePipes(new ValidationPipe())
    updateProfile(@Body() data:ModeratorDto, @Session() session, @UploadedFile() imageobj: Express.Multer.File): object {
        console.log(data);
        data.image = imageobj.filename;
        return this.moderatorService.updateProfile(session.email, data);
    }

    @Post("/removeBook/:id")
    removeBook(@Param() id: number, ParseIntPipe): any {
        return this.moderatorService.removeBook(id);
    }

    @Post("/deleteAccount/:id")
    deleteAccount(@Param('id', ParseIntPipe) id: number): any {
        return this.moderatorService.deleteAccount(id);
    }
}

