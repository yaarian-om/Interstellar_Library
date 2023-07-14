/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { BookDTO, FeedbackDTO, SellerDTO } from './seller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressEntity, BookEntity, FeedbackEntity, SellerEntity } from './seller.entity';
import { promises } from 'dns';
import { plainToClass } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SellerService {

    constructor(
        @InjectRepository(SellerEntity) private sellerRepository: Repository<SellerEntity>,
        @InjectRepository(FeedbackEntity) private feedbackRepository: Repository<FeedbackEntity>,
        @InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>,
        @InjectRepository(AddressEntity) private addressRepository: Repository<AddressEntity>,
        //  Add More Here
        ){}
    
    
    

// ########################################### BOOK ##############################################
    current_book_info : BookDTO
    current_feedback_info : FeedbackDTO

    async AddBooks(id:number,book_info: BookDTO) : Promise<BookEntity> {
        //! Problem : Current logged in Seller_ID is not being added to the book table by using session

        return this.bookRepository.save(book_info);
    }

    ViewAllBooks(id): Promise<SellerEntity[]> {
        return this.sellerRepository.find({
            where: { Seller_ID: id },
            relations: {
                books: true
            }
            });
    }


    async ViewSingleBook(id: number): Promise<BookEntity> {
        return this.bookRepository.findOneBy({Book_ID: id});
    }

    async UpdateBookInfo(b_id:number, updated_data: BookDTO): Promise<BookEntity> {
        
        await this.bookRepository.update(b_id, updated_data); // Where to Update , Updated Data
        return this.bookRepository.findOneBy({Book_ID: b_id});

    }

    DeleteBookInfo(id: number): any {
        this.bookRepository.delete(id);
        return {"Success":"Book Deleted Successfully"};
    }

    UploadBookImage(filename: string): any {
        if(this.current_book_info != null && filename != null){
            this.current_book_info.Book_Image = filename;
            return this.current_book_info;
        }else{
            return {"Error":"No Book available in the database to show"};
        }
    }

    async getBookImages(id: number, res: any): Promise<any> {

        const currentBook = await this.bookRepository.findOneBy({ Book_ID: id });
        const currentBookDTO: BookDTO = plainToClass(BookDTO, currentBook);
        if (currentBook) {
            const currentBookDTO: BookDTO = plainToClass(BookDTO, currentBook);
            console.log(currentBookDTO);
            return res.sendFile(currentBookDTO.Book_Image, {
              root: './assets/book_images',
            });
          } else {
            return { Error: 'No Book available in the database to show' };
          }

    }

    


// ############################################# SELLER ##############################################

    async SendFeedback(feedback_info: FeedbackEntity): Promise<FeedbackEntity> {
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
        feedback_info.Receiver_Type = "Admin";
        return this.feedbackRepository.save(feedback_info);
    }


    async ViewCustomerFeedback(): Promise<FeedbackEntity[]> {
        return this.feedbackRepository.find({
            where: { Receiver_Type: 'Seller' }
          });
    }


    async Logout(id: number): Promise<any> {
        const currentSeller = this.sellerRepository.findOneBy({Seller_ID: id});
        if(currentSeller){
            // TODO: Destroy Session
            return "Logout Successfully";
        }else{
            return "Logout Failed";
        }
    }


    async Signup(seller_info: SellerDTO): Promise<SellerEntity> {
        seller_info.Profile_Picture = "temp.png";
        const salt = await bcrypt.genSalt();
        seller_info.Password = await bcrypt.hash(seller_info.Password, salt);
        return this.sellerRepository.save(seller_info);
    }

    async DeleteAccount(id: number): Promise<void> {
        await this.sellerRepository.delete(id);
    }

    async ViewSellerProfile(id: number): Promise<SellerEntity> {
        return this.sellerRepository.findOneBy({Seller_ID: id});
    }
        




    async UpdateProfileInfo(id: number, updated_data: SellerDTO): Promise<SellerEntity> {
        await this.sellerRepository.update(id, updated_data); // Where to Update , Updated Data
        return this.sellerRepository.findOneBy({Seller_ID: id});
    }

    async Login(seller_info: SellerDTO): Promise<SellerEntity> {
        
        // const seller = this.sellerRepository.findOneBy({Email: seller_info.Email, Password: seller_info.Password});
       
        // console.log("Service Login promise 1"); // Working
        const saved_seller = await this.sellerRepository.findOneBy({Email: seller_info.Email});
        // console.log("Service Login promise 2"); // Working
        // console.log(saved_seller)
        if(saved_seller != null){
            const match : boolean = await bcrypt.compare(seller_info.Password, saved_seller.Password);
            if (match) {
                return saved_seller;
            }else{
                return null;
            }
        }
        // console.log("Service Login promise 3"); // Working
        return null;
    }

    async UploadSellerImage(id:number,image:string): Promise<SellerEntity> {
        
        const current_seller = this.sellerRepository.findOneBy({Seller_ID: id});
        if(current_seller){
            (await current_seller).Profile_Picture = image;
            await this.sellerRepository.update(id,(await current_seller));
            return this.sellerRepository.findOneBy({Seller_ID: id});
        }
        
    }

    async getSellerImages(id: number, res: any): Promise<any> {

        const current_seller = await this.sellerRepository.findOneBy({Seller_ID: id});
        if(current_seller){
            res.sendFile(current_seller.Profile_Picture,{ root: './assets/profile_images' })
        }
    }





}
