/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AddSellerDTO, AdminDTO, BookDTO, LogoutDTO, UpdateBookDTO } from './administrator.dto';
import { SellerDTO } from 'src/Seller/seller.dto';

@Injectable()
export class AdministratorService {
    Login(loginData: AdminDTO): object {
       return loginData;
    }

    addSeller(sellerData: SellerDTO): object {
        // Add logic to add the seller
        return sellerData;
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
        return { bookId, ...bookData };
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
