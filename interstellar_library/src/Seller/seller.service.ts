/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { BookDTO, FeedbackDTO, SellerDTO } from './seller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellerEntity, TestEntity } from './seller.entity';
import { promises } from 'dns';

@Injectable()
export class SellerService {

    constructor(
        @InjectRepository(SellerEntity) private sellerRepository: Repository<SellerEntity>
        //  Add More Here
        ){}
    
    
    

// ########################################### BOOK ##############################################
    current_book_info : BookDTO
    current_feedback_info : FeedbackDTO

    AddBooks(book_info: BookDTO) : object {
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

    ViewSingleBook(book_info: BookDTO): any {
        // console.log(book_info); // Working

        if(book_info != null){
            if(book_info.Book_ID != null && book_info.Book_ID == this.current_book_info.Book_ID){
                return "Book id Found ! The Id is = "+book_info.Book_ID;
            }
            if(book_info.Title != null && book_info.Title == this.current_book_info.Title){
                return "Book Name Found ! The Name is = "+book_info.Title;
            }
            if(book_info.ISBN != null && book_info.ISBN == this.current_book_info.ISBN){
                return "Book ICBN Found ! The ICBN is = "+book_info.ISBN;
            }
            
            return "Book Not Found";
            
        }
    }

    UpdateBookInfo(s_id:number, updated_data: BookDTO): object {

        // console.log(s_id); // Working
        // console.log(updated_data); // Working
        // console.log(this.current_book_info); // Working


        if((s_id == this.current_book_info.Book_ID) && (s_id >= 0 ) && (this.current_book_info.Book_ID >= 0)){
            this.current_book_info = updated_data;
            return this.current_book_info;
        }else{
            return {"Error":"Book Not Found"};
        }

    }

    DeleteBookInfo(id: number): any {
        if(id == this.current_book_info.Book_ID){
            this.current_book_info = null;
            return "Book id = "+id+" And the Book Deleted Successfully";
        }else{
            return {"Error":"Book Not Found. Failed to Delete"};
        }
       
    }

    UploadBookImage(filename: string): any {
        if(this.current_book_info != null && filename != null){
            this.current_book_info.Book_Image = filename;
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
        feedback_info.Date = dateString;

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


    async Logout(id: number): Promise<any> {
        let currentSeller = this.sellerRepository.findOneBy({Seller_ID: id});
        if(currentSeller){
            return "Logout Successfully";
        }else{
            return "Logout Failed";
        }
    }


    async Signup(seller_info: SellerEntity): Promise<SellerEntity> {
        // this.current_seller_info = seller_info;
        // return seller_info;
        seller_info.Profile_Picture = "temp.png";
        return this.sellerRepository.save(seller_info);
    }

    async DeleteAccount(id: number): Promise<void> {
        await this.sellerRepository.delete(id);
    }

    

    async ViewSellerProfile(id: number): Promise<SellerEntity> {
        return this.sellerRepository.findOneBy({Seller_ID: id});
    }
        




    async UpdateProfileInfo(id: number, updated_data: SellerEntity): Promise<SellerEntity> {
        await this.sellerRepository.update(id, updated_data);
        return this.sellerRepository.findOneBy({Seller_ID: id});
    }

    async Login(seller_info: SellerEntity): Promise<SellerEntity> {
        
        let seller = this.sellerRepository.findOneBy({Email: seller_info.Email, Password: seller_info.Password});
        return seller;
    }

    async UploadSellerImage(id:number,image:string): Promise<SellerEntity> {
        
        /*
        if(this.current_seller_info != null && image != null){
            this.current_seller_info.Profile_Picture = image;
            return this.current_seller_info;
        }else{
            return {"Error":"No seller available in the database to show"};
        }
        */

        
        let current_seller = this.sellerRepository.findOneBy({Seller_ID: id});
        if(current_seller){
            (await current_seller).Profile_Picture = image;
            await this.sellerRepository.update(id,(await current_seller));
            return this.sellerRepository.findOneBy({Seller_ID: id});
        }
        
    }

    async getSellerImages(id: number, res: any): Promise<any> {

        let current_seller = await this.sellerRepository.findOneBy({Seller_ID: id});
        if(current_seller){
            res.sendFile(current_seller.Profile_Picture,{ root: './assets/profile_images' })
        }
        // if(this.current_seller_info != null && name != null){
        //     res.sendFile(name,{ root: './assets/profile_images' })
        // }
    }
    






}
