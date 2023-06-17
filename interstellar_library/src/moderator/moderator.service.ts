import { Injectable } from "@nestjs/common";
import { ModeratorDto } from "./moderator.dto";

@Injectable()
export class ModeratorService {
    getHello(): string {
        return 'Hello Moderator!';
    }

    getCustomerById(id:number): object {
        return ({id: id, name: "Moderator"})
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

    login(email:string, password:string): any {
        return ({email: email, password: password})
    }

    logout(): object {
        return ({message: "Logout"})
    }
    updateCustomer(id:number, name:string): object {
        return ({id: id, name: name})
    }

    updateSeller(id:number, name:string): object {
        return ({id: id, name: name})
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