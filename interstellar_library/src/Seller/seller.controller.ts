/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { SellerService } from './seller.service';
import { BookDTO, FeedbackDTO, SellerDTO } from './seller.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from "multer";
// import multer from 'multer';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService){
        // Empty Constructor
    }

    backup_seller_info: SellerDTO

    
    @Get('/index')
    getIndex(): any {
        return "Relax! Seller is Alive."
    }

    @Post('/add_books')
    @UsePipes(new ValidationPipe())
    AddBooks(@Body() book_info: BookDTO):object {
        // console.log(book_info); // Working
        return this.sellerService.AddBooks(book_info);
    }

    @Get('/books')
    ViewAllBooks(): any{
        return this.sellerService.ViewAllBooks();
    }

    @Get('/books/search_books')
    ViewSingleBook(@Query() book_info:BookDTO): BookDTO{ 
        // console.log(book_info); // Working
        return this.sellerService.ViewSingleBook(book_info);
    }


    @Put('/books/update_book_info/:id')
    @UsePipes(new ValidationPipe())
    UpdateBookInfo(@Param('id', ParseIntPipe) id:number, @Body() updated_data:BookDTO): object{
        return this.sellerService.UpdateBookInfo(id,updated_data);
    }
    

    @Delete('/books/delete_books/:id')
    DeleteBookInfo(@Param('id', ParseIntPipe) id:number): number{
        return this.sellerService.DeleteBookInfo(id);
    }

        // Book Image Upload 
    
        @Post(('/books/update_book_info/upload_book_image'))
        @UseInterceptors(FileInterceptor('myfile',
            { 
                fileFilter: (req, file, cb) => {
                    if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                        cb(null, true);
                    else {
                        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                    }
                },
                limits: { fileSize: 5000000 }, // 5 MB
                storage:diskStorage({
                    destination: './assets/book_images',
                    filename: function (req, file, cb) {
                        cb(null,Date.now()+file.originalname)
                    }, 
                })
            }
        ))
        UploadBookImage(@UploadedFile() myfileobj: Express.Multer.File):string
        {
            console.log(myfileobj) // We can find the file name here
            return this.sellerService.UploadBookImage(myfileobj.filename);
        }
    
        @Get('/book/book_image/:name')
        getBookImages(@Param('name') name, @Res() res) : any {
            return this.sellerService.getBookImages(name,res);
        }
    
    



    @Post('/feedbacks/send_feedback')
    @UsePipes(new ValidationPipe())
    SendFeedback(@Body() feedback_info: FeedbackDTO): object{
        return this.sellerService.SendFeedback(feedback_info);
    }

    @Get('/feedbacks')
    ViewCustomerFeedback(): any{
        return this.sellerService.ViewCustomerFeedback();
        
    }
    
    @Post('/logout/:id')
    Logout(@Param('id', ParseIntPipe) id:number): object{
        return this.sellerService.Logout(id);
    }

    @Post('/signup')
    @UsePipes(new ValidationPipe())
    Signup(@Body() seller_info: SellerDTO): object{
        return this.sellerService.Signup(seller_info);
    }

    @Delete('/profile/delete_profile/:id')
    DeleteAccount(@Param('id', ParseIntPipe) id:number): object{
        return this.sellerService.DeleteAccount(id);
    }

    @Get('/profile/:id')
    ViewSellerProfile(@Param('id', ParseIntPipe) id:number): object{
        return this.sellerService.ViewSellerProfile(id);
    }

    @Put('/profile/update_profile_info/:id')
    @UsePipes(new ValidationPipe())
    UpdateProfileInfo(@Param('id', ParseIntPipe) id:number, @Body() updated_data:SellerDTO): object{
        return this.sellerService.UpdateProfileInfo(id,updated_data);
    }

    @Post('/login')
    // @UsePipes(new ValidationPipe())
    Login(@Body() seller_info: SellerDTO): object{
        return this.sellerService.Login(seller_info);
    }

    // Seller Image Upload 
    
    @Put(('/profile/update_profile_info/upload_profile_image/:id'))
    @UseInterceptors(FileInterceptor('myfile',
        { 
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 5000000 }, // 5 MB
            storage:diskStorage({
                destination: './assets/profile_images',
                filename: function (req, file, cb) {
                    cb(null,Date.now()+file.originalname)
                },
            })
        }
    ))
    UploadSellerImage(@Param('id', ParseIntPipe) id: number,
        @UploadedFile() myfileobj: Express.Multer.File):object
    {
        console.log(myfileobj) // We can find the file name here
        return this.sellerService.UploadSellerImage(id,myfileobj.filename);
    }

    @Get('/profile/profile_image/:name')
    getSellerImages(@Param('name') name, @Res() res) : any {
        return this.sellerService.getSellerImages(name,res);
    }


    


}


