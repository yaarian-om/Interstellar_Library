/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
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



}
