import { Inject, Injectable } from "@nestjs/common";
import { CustomerDto, ModeratorDto, SellerDto } from "./moderator.dto";
import { BookEntity, CustomerEntity, ModeratorEntity, SellerEntity } from "./moderator.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";




@Injectable()
export class ModeratorService {
    constructor(
        @InjectRepository(ModeratorEntity)
        private readonly moderatorRepository: Repository<ModeratorEntity>,
        @InjectRepository(CustomerEntity)
        private readonly customerRepository: Repository<CustomerEntity>,
        @InjectRepository(SellerEntity)
        private readonly sellerRepository: Repository<SellerEntity>,
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {}
    
    customer_curr: CustomerDto;
    seller_curr: SellerDto;
    moderator_curr: ModeratorDto;

    getHello(): string {
        return 'Hello Moderator!';
    }

    async getCustomerById(id): Promise<any> {
     
       
        return this.customerRepository.findOne(id);
      
    }
    
    getSellerById(id:SellerDto, data:SellerDto): object {
        if(data != null)
            if(data.id == id.id)
                return data;
            else 
                return ({message: "Seller not found"})
        else
            return ({message: "Invalid Input"})
    }

    updateProfile(data: ModeratorDto): object {
        return this.moderatorRepository.save(data);
    }

    getAllBooks(): object {
        return ({id: 1, name: "Book"})
    }

    login(qry:ModeratorDto, data:ModeratorDto): string {
        if(qry.email==data.email && qry.password==data.password)
            return "Login Successful";
        else
            return "Invalid Credentials";
    }

    logout(): object {
        return ({message: "Logout"})
    }
    updateCustomer(id:number, name:string, data:ModeratorDto): object {
        return data;
    }

    updateSeller(id:number, name:string, data:ModeratorDto): object {
        return data;
    }

    getCustomerFeedback(id:number): object {
        return ({id: id, name: "Feedback"})
    }

    getSellerFeedback(id:number): object {
        return ({id: id, name: "Feedback"})
    }

    removeBook(id:number): object {
        return ({id: id, name: "Book"})
    }

    deleteAccount(id:number): object {
        return this.moderatorRepository.delete(id);
    }
}