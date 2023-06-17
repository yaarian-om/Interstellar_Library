/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AddBooksDTO, FeedbackDTO, SellerDTO } from './seller.dto';

@Injectable()
export class SellerService {
    
    
    

// ########################################### BOOK ##############################################
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

    UploadBookImage(filename: string): any {
        if(this.current_book_info != null && filename != null){
            this.current_book_info.Image = filename;
            return this.current_book_info;
        }else{
            return {"Error":"No Book available in the database to show"};
        }
    }

    getBookImages(name: any, res: any): any {
        if(this.current_book_info != null && name != null){
            res.sendFile(name,{ root: './assets/book_images' })
        }
    }

    


// ############################################# SELLER ##############################################

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
        if(id == this.current_seller_info.Id){ 
            return "Seller id = "+id+" And the Seller Logged Out Successfully";
        }else{
            return {"Error":"Seller Not Found. Failed to Logout"};
        }
    }


    Signup(seller_info: SellerDTO): object {
        this.current_seller_info = seller_info;
        return seller_info;
    }

    DeleteAccount(id: number): any {
        if(id == this.current_seller_info.Id){
            this.current_seller_info = null;
            return "Seller id = "+id+" And the Seller Profile Deleted Successfully";
        }else{
            return {"Error":"Seller Not Found. Failed to Delete"};
        }
    }

    

    ViewSellerProfile(id: number): any {
        if(this.current_seller_info != null){
            if(id == this.current_seller_info.Id){
                return this.current_seller_info;
            }else{
                return {"Error":"Seller Not Found"};
            }
        }else{
            return "No Seller Profile in the database to show"
        }
    }



    UpdateProfileInfo(id: number, updated_data: SellerDTO): object {
        if((id == this.current_seller_info.Id) && (id >= 0 ) && (this.current_seller_info.Id >= 0)){
            this.current_seller_info = updated_data;
            return this.current_seller_info;
        }else{
            return {"Error":"Seller Not Found"};
        }
    }

    Login(seller_info: SellerDTO): any {
        if(this.current_seller_info != null){
            if(seller_info.Mail == this.current_seller_info.Mail && seller_info.Password == this.current_seller_info.Password){
                return "Congratulations Dev! Seller found! The seller Primary_Key = "+this.current_seller_info.Id;
            }else{
                return {"Error":"ID & Password Not Matched"};
            }
        }else{
            return {"Error":"No seller available in the database to show"};
        }
    }

    UploadSellerImage(image:string): any {
        if(this.current_seller_info != null && image != null){
            this.current_seller_info.Image = image;
            return this.current_seller_info;
        }else{
            return {"Error":"No seller available in the database to show"};
        }
    }

    getSellerImages(name: string, res: any): any {
        if(this.current_seller_info != null && name != null){
            res.sendFile(name,{ root: './assets/profile_images' })
        }
    }
    






}
