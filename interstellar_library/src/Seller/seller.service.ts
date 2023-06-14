/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerService { 
    

    AddBooks(book_info: any) {
        return book_info;
    }
}
