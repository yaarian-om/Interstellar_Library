/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AddBooksDTO, FeedbackDTO, SellerDTO } from './seller.dto';

@Injectable()
export class SellerService {
    
    
    
    
    
    
    

    current_book_info : AddBooksDTO
    current_feedback_info : FeedbackDTO
    current_seller_info : SellerDTO

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

    UpdateBookInfo(s_id:number, updated_data: AddBooksDTO): object {

        // console.log(s_id); // Working
        // console.log(updated_data); // Working
        // console.log(this.current_book_info); // Working


        if((s_id == this.current_book_info.Id) && (s_id >= 0 ) && (this.current_book_info.Id >= 0)){
            this.current_book_info = updated_data;
            return this.current_book_info;
        }else{
            return {"Error":"Book Not Found"};
        }

    }

    DeleteBookInfo(id: number): any {
        if(id == this.current_book_info.Id){
            return "Book id = "+id+" And the Book Deleted Successfully";
        }else{
            return {"Error":"Book Not Found. Failed to Delete"};
        }
       
    }


    SendFeedback(feedback_info: FeedbackDTO): object {
        const now: Date = new Date();
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        };
        const dateString: string = now.toLocaleString(undefined, options);
        // console.log(dateString); // Working
        feedback_info.Time = dateString;

        this.current_feedback_info = feedback_info;
        return feedback_info;
    }


    ViewCustomerFeedback(): any {
        if(this.current_feedback_info != null){
            return this.current_feedback_info;
        }
        else{
            return "No Feedbacks to show.";
        }
    }


    Logout(id: number): any {
        if(id == this.current_book_info.Id){ // Here I am using Book Id as Seller Id
            return "Seller id = "+id+" And the Seller Logged Out Successfully";
        }else{
            return {"Error":"Seller Not Found. Failed to Logout"};
        }
    }


    Signup(seller_info: SellerDTO): object {
        this.current_seller_info = seller_info;
        return seller_info;
    }






}
