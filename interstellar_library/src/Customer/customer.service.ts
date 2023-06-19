/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Post } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
@Injectable()
export class CustomerService {
     DeleteCustomerId(id: any): number {
        return id
    }
     SearchBook(book_search: any): any {
        return book_search
    }
     AddToCard(book_info: any): any {
        return book_info
    }
     UpdateCustomerProfile(updated_info: CustomerDto): object {
        return updated_info
    }
     SignUP(signup_info: CustomerDto): object {
        return signup_info
    }
     LogoutByID(id: number): number {
        return id
    }
     Login(login_info: CustomerDto): any {
        return login_info
    }

   

    
 }
