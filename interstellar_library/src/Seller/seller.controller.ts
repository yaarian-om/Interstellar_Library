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



    
    @Get('/index')
    getIndex(): any {
        return "Relax! Seller is Alive."
    }

 
    // ######################################### BOOKS ######################################################
    

    // * Feature 1 : Add Books
    @Post('/add_books/:id')
    @UsePipes(new ValidationPipe())
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
    AddBooks(@Param('id', ParseIntPipe) id:number,@Body() book_info: BookDTO, @UploadedFile() myfileobj: Express.Multer.File):object {
        book_info.Book_Image = myfileobj.filename; // Adding Book Image name to DTO to store in database
        return this.sellerService.AddBooks(id, book_info);
    }


    // * Feature 2 : View All Books
    @Get('/books/:id')
    ViewAllBooks(@Param('id', ParseIntPipe) id:number): any{
        return this.sellerService.ViewAllBooks(id);
    }

    // * Feature 3 : View Single Book (Used While Books info needs to be edited)
    @Get('/books/search_books/:id')
    ViewSingleBook(@Param('id',ParseIntPipe) id:number): any{
        return this.sellerService.ViewSingleBook(id);
    }

    // * Feature 4 : Update Book Info
    @Put('/books/update_book_info/:id')
    @UsePipes(new ValidationPipe())
    UpdateBookInfo(@Param('id', ParseIntPipe) id:number, @Body() updated_data:BookDTO): object{
        return this.sellerService.UpdateBookInfo(id,updated_data);
    }

 
    // * Feature 5 : Delete Book Info
    @Delete('/books/delete_books/:id')
    DeleteBookInfo(@Param('id', ParseIntPipe) id:number): number{
        return this.sellerService.DeleteBookInfo(id);
    }


    // * Feature 6 : Upload & Update Book Image
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

        
        
    // * Feature 7 : View Book Images
    @Get('/book/book_image/:id')
    getBookImages(@Param('id',ParseIntPipe) id:number, @Res() res) : any {
        return this.sellerService.getBookImages(id,res);
    }
    

    //  ################################### SELLER ########################################################


    // * Feature 8 : Send Feedback to Admin
    @Post('/feedbacks/send_feedback')
    @UsePipes(new ValidationPipe())
    SendFeedback(@Body() feedback_info: FeedbackDTO): object{
        return this.sellerService.SendFeedback(feedback_info);
    }

    // * Feature 9 : View Customer Feedback
    @Get('/feedbacks')
    ViewCustomerFeedback(): any{
        return this.sellerService.ViewCustomerFeedback();
        
    }
    
    // * Feature 10 : Logout
    @Post('/logout/:id')
    Logout(@Param('id', ParseIntPipe) id:number): object{
        return this.sellerService.Logout(id);
    }

    // * Feature 11 : View Seller Profile
    // TODO: There is a new Term Address is added in seller Table. How to handle it while Signup?
    @Post('/signup')
    @UsePipes(new ValidationPipe())
    Signup(@Body() seller_info: SellerDTO): object{
        return this.sellerService.Signup(seller_info);
    }

    // * Feature 12 : Delete Seller Account
    @Delete('/profile/delete_profile/:id')
    DeleteAccount(@Param('id', ParseIntPipe) id:number): object{
        return this.sellerService.DeleteAccount(id);
    }

    // * Feature 13 : View Seller Profile
    @Get('/profile/:id')
    ViewSellerProfile(@Param('id', ParseIntPipe) id:number): object{
        return this.sellerService.ViewSellerProfile(id);
    }

    // * Feature 14 : Update Seller Profile
    @Put('/profile/update_profile_info/:id')
    @UsePipes(new ValidationPipe())
    UpdateProfileInfo(@Param('id', ParseIntPipe) id:number, @Body() updated_data:SellerDTO): object{
        return this.sellerService.UpdateProfileInfo(id,updated_data);
    }

    // * Feature 15 : Login
    @Post('/login')
    // @UsePipes(new ValidationPipe())
    Login(@Body() seller_info: SellerDTO): object{
        return this.sellerService.Login(seller_info);
    }

    // * Feature 16 : Upload & Update Seller Image
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

    // * Feature 17 : View Seller Images
    @Get('/profile/profile_image/:name')
    getSellerImages(@Param('name') name, @Res() res) : any {
        return this.sellerService.getSellerImages(name,res);
    }


    

    

}


