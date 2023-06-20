import { Injectable } from "@nestjs/common";
import { ModeratorDto } from "./moderator.dto";

@Injectable()
export class ModeratorService {
    getHello(): string {
        return 'Hello Moderator!';
    }

    getCustomerById(id:number): object {
        return ({id: id, name: "Customer"})
    }
    
    getSellerById(id:number): object {
        return ({id: id, name: "Seller"})
    }

    updateProfile(data: ModeratorDto): object {
        return data;
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
        return ({id: id, name: "Account"})
    }
}