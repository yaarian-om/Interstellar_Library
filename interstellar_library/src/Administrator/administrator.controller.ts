/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import {  AdminDTO, BookDTO, LogoutDTO } from './administrator.dto';
import { SellerDTO } from 'src/Seller/seller.dto';

@Controller('admin')
export class AdministratorController {

    constructor(private readonly adminService: AdministratorService){
        // Empty Constructor
    }



    
    @Get('/index')
    @UsePipes(new ValidationPipe())
    getIndex(): any {
        return "Admin is working"
    }

    @Get('/viewseller')
    @UsePipes(new ValidationPipe())
    ViewSeller() : any{
        return "i am seller";
    }

    @Post('/login')
    Login(@Body() loginData : AdminDTO) : object{
        return this.adminService.Login(loginData);
    }

    @Post('/addsellers')
    @UsePipes(new ValidationPipe())
    addSeller(@Body() sellerData: SellerDTO): object {
      return this.adminService.addSeller(sellerData);
    }

    @Delete('/sellers/:id')
    @UsePipes(new ValidationPipe())
    removeSeller(@Param('id') sellerId: string): object {
  return this.adminService.removeSeller(sellerId);
    }

     @Delete('/customers/:id')
     @UsePipes(new ValidationPipe())
      removeCustomer(@Param('id', ParseIntPipe) customerId: number): object{
        return this.adminService.removeCustomer(customerId);
      }

        @Put('/books/:id')
        @UsePipes(new ValidationPipe())
    updateBookList(@Param('id') bookId: string, @Body() bookData: BookDTO): object {
    return this.adminService.updateBookList(bookId, bookData);
    }

    @Delete('/books/:id')
    @UsePipes(new ValidationPipe())
    deleteBookList(@Param('id') bookId: string): object {
    return this.adminService.deleteBookList(bookId);
}

    	@Get('/transactions')
        @UsePipes(new ValidationPipe())
    getAllTransactions(): object {
     return this.adminService.getAllTransactions();
}

    @Post('/logout')
    @UsePipes(new ValidationPipe())
    logout(@Body() logoutData: LogoutDTO): object {
    return this.adminService.logout(logoutData);
}

}



