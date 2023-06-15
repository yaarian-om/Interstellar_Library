/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { SellerService } from './seller.service';
import { AddBooksDTO } from './seller.dto';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService){
        // Empty Constructor
    }

    
    @Get('/index')
    getIndex(): any {
        return "Relax! Seller is Alive."
    }

    @Post('/add_books')
    @UsePipes(new ValidationPipe())
    AddBooks(@Body() book_info: AddBooksDTO):object {
        // console.log(book_info); // Working
        return this.sellerService.AddBooks(book_info);
    }

    @Get('/books')
    ViewAllBooks(): any{
        return this.sellerService.ViewAllBooks();
    }

    @Get('/books/search_books')
    ViewSingleBook(@Query() book_info:AddBooksDTO): AddBooksDTO{ 
        // console.log(book_info); // Working
        return this.sellerService.ViewSingleBook(book_info);
    }


    @Put('/books/update_book_info/:id')
    @UsePipes(new ValidationPipe())
    UpdateBookInfo(@Param('id', ParseIntPipe) id:number, @Body() updated_data:AddBooksDTO): object{
        return this.sellerService.UpdateBookInfo(id,updated_data);
    }
    

    @Delete('/books/delete_books/:id')
    DeleteBookInfo(@Param('id', ParseIntPipe) id:number): number{
        return this.sellerService.DeleteBookInfo(id);
    }

}
