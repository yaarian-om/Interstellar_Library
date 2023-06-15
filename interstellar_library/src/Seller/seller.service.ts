/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AddBooksDTO } from './seller.dto';

@Injectable()
export class SellerService {
    

    current_book_info : AddBooksDTO

    AddBooks(book_info: AddBooksDTO) : object {
        this.current_book_info = book_info;
        return book_info;
    }

    ViewAllBooks(): any {
        if(this.current_book_info != null){
            return this.current_book_info;
        }
        else{
            return "No Books are added yet.";
        }
    }

    ViewSingleBook(book_info: AddBooksDTO): any {
        // console.log(book_info); // Working

        if(book_info != null){
            if(book_info.Id != null && book_info.Id == this.current_book_info.Id){
                return "Book id Found ! The Id is = "+book_info.Id;
            }
            if(book_info.Name != null && book_info.Name == this.current_book_info.Name){
                return "Book Name Found ! The Name is = "+book_info.Name;
            }
            if(book_info.ICBN != null && book_info.ICBN == this.current_book_info.ICBN){
                return "Book ICBN Found ! The ICBN is = "+book_info.ICBN;
            }
            
            return "Book Not Found";
            
        }
    }


    




}
