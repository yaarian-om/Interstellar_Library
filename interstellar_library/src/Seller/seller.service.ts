/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AddBooksDTO } from './seller.dto';

@Injectable()
export class SellerService { 
    

    AddBooks(book_info: AddBooksDTO) : object {
        return book_info;
    }
}
