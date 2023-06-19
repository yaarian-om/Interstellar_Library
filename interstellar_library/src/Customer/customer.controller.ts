/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AddToCardDto, CustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {

    constructor(private readonly customerService: CustomerService){
        // Empty Constructor
    }

    @Get('/index')
    getIndex(): any {
        return "Hello World"
    }
   
       @Post('/login')
       Login(@Body() login_info : CustomerDto) : any {
        return this.customerService.Login(login_info)
       }

       @Post('/logout/:id')
       LogoutByID(@Param()id:number,ParseIntPipe) :number {

        return this.customerService.LogoutByID(id)

       }

       @Post('singup')
       SignUp(@Query() signup_info:CustomerDto) :any {
        return this.customerService.SignUP(signup_info)
       }

       @Put('/update_profile')
       UpdateCustomerProfile(@Query()updated_info:CustomerDto):object{
        return this.customerService.UpdateCustomerProfile(updated_info)
       }

       @Post ('/add to cart')
       AddToCard(@Query()book_info:AddToCardDto):any {
        return this.customerService.AddToCard(book_info)
       }

       @Get('/searcch_book_title')
       SearchBook(@Query()book_search:any):any{
        return this.customerService.SearchBook(book_search)
       }

       @Delete('/delete_account/:id')
       DeleteCustomerId(@Param('id', ParseIntPipe) id:number): number{
        return this.customerService.DeleteCustomerId(id)
       }




}
