/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Query } from '@nestjs/common';
import { SellerService } from './seller.service';

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
    AddBooks(@Query() book_info: any) {
        return this.sellerService.AddBooks(book_info);
    }



}
