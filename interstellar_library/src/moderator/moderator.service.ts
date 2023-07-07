import { Inject, Injectable } from "@nestjs/common";
import { CustomerDto, ModeratorDto, ModeratorLoginDto} from "./moderator.dto";
import { CustomerEntity, ModeratorEntity} from "./moderator.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SellerEntity, BookEntity, FeedbackEntity } from "src/Seller/seller.entity";
import { SellerDTO } from "src/Seller/seller.dto";
import * as bcrypt from 'bcrypt';




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
        private readonly bookRepository: Repository<BookEntity>,
        @InjectRepository(FeedbackEntity)
        private readonly feedbackRepository: Repository<FeedbackEntity>
    ) {}
    
    customer_curr: CustomerDto;
    seller_curr: SellerDTO;
    moderator_curr: ModeratorDto;

    getHello(): string {
        return 'Hello Moderator!';
    }

    async getCustomerById(id): Promise<any> {
        return this.customerRepository.findOne(id);
    }
    
    getSellerById(id:SellerDTO, data:SellerDTO): object {
        if(data != null)
            if(data.Seller_ID == id.Seller_ID)
                return data;
            else 
                return ({message: "Seller not found"})
        else
            return ({message: "Invalid Input"})
    }

    async updateProfile(email:string, data: ModeratorDto): Promise<ModeratorEntity> {
        await this.moderatorRepository.update({email: email}, data);
        return this.moderatorRepository.findOneBy({email: email});
    }

    async getAllBooks(): Promise<BookEntity[]> {
        return this.bookRepository.find();
    }

    async register(data: ModeratorDto): Promise<any> {  
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, salt);
        data.password = hashedPassword;
        return this.moderatorRepository.save(data);
    }
    async Login(moderator_info: ModeratorLoginDto) {
        const moderatorData = await this.moderatorRepository.findOne({where: {email: moderator_info.email}});
        const isMatch: boolean = await bcrypt.compare(moderator_info.password, moderatorData.password);
        if(isMatch) {
            return moderatorData;
        }
        else {
            return false;
        }
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

    async getCustomerFeedback(): Promise<FeedbackEntity[]> {
        return this.feedbackRepository.find({
            where: {Receiver_Type: 'Customer'}
        });
    }

    async getSellerFeedback(): Promise<FeedbackEntity[]> {
        return this.feedbackRepository.find({
            where: {Receiver_Type: 'Seller'}
        });
    }

    removeBook(id:number): object {
        return ({id: id, name: "Book"})
    }

    deleteAccount(id:number): any {
        this.moderatorRepository.delete(id);
        return {message: "Account Deleted"};
    }
}