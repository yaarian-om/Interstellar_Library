/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller()
export class CustomerController {

    constructor(private readonly sellerService: CustomerService){
        // Empty Constructor
    }

    @Get('/index')
    getIndex(): any {
        return "Relax! Seller is Alive."
    }



}
