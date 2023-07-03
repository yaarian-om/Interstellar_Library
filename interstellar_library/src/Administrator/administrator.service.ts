/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import {  AdminDTO, BookDTO, LogoutDTO, UpdateBookDTO } from './administrator.dto';
import { SellerDTO } from 'src/Seller/seller.dto';
import { SellerEntity } from 'src/Seller/seller.entity';
import { AdminEntity } from './administrator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class AdministratorService {

  constructor(
    @InjectRepository(SellerEntity) private sellerRepository: Repository<SellerEntity>,
    @InjectRepository(AdminEntity) private  adminRepository: Repository<SellerEntity>,
    
    //  Add More Here
    ){}

    Login(loginData: AdminDTO): object {
       return loginData;
    }

    async addSeller(seller_info: SellerDTO): Promise<SellerEntity>  {
      seller_info.Profile_Picture = "temp.png";
      return this.sellerRepository.save(seller_info);
      }

      removeSeller(sellerId: string): object {
        // Add logic to remove the seller
        return { success: true };
      }

      removeCustomer(customerId: number): object {
        // Add logic to remove the customer
        return { success: true };
      }

      getSellerInfo(sellerId: string): object {
        // Add logic to get seller information
        return { sellerId, name: "John Doe", email: "johndoe@example.com" };
      }


      
      
      updateBookList(bookId: string, bookData: BookDTO): object {
        // Add logic to update the book list
        return { bookId, bookData };
      }

      deleteBookList(bookId: string): object {
        // Add logic to delete the book list
        return { success: true };
      }

      logout(logoutData: LogoutDTO): object {
        // Add logic to handle the logout process
        return { success: true };
      }

      getAllTransactions() : any{
        return "All Transactions Showed"
      }
      
      
}
