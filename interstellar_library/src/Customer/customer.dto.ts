
import { IsString, IsNumber } from 'class-validator';
export class CustomerDto{
    
    @IsString({message:"Name must be valid"})
    Name:string;

    @IsString({message:"The Mail must be Valid"})
    Email:string;

    @IsString({message:"The Password should  be valid"})
    Password:string;
    
    @IsNumber()
    Id : number = -1;
    @IsString({message:"The Address should be valid"})
    Address: string;

    @IsString({message:"The City name should be valid"})
    City: string;
    
    @IsString({message:"The Country name should be valid"})
    Country: string;


}

export class AddToCardDto {
    @IsString({message:"Name should be valid"})
    Name: string;

    @IsNumber()
    Id: number = -1;

    @IsNumber()
    Price : number = -1;

    @IsString({message:"The Image should be valid"})
    Image : string;
}
 
export class FeedBackDto {

    @IsString({message:"Name should be valid"})
    Name: string;

    @IsNumber()
    Id: number = -1;
    @IsString({message:"The Email  should be valid"})
    Mail: string;

    @IsString()
    Comment: string;
}