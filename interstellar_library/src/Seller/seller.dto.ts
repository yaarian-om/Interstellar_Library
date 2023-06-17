import { IsString, IsNumber, Matches, Min, IsEmail, NotEquals } from "class-validator";


export class AddBooksDTO {

    @IsNumber({},{message:"ID must be in Integer Format"})
    @Min(0,{message:"ID must be greater or equal than 0"})
    Id : number = -1;

    @IsString({message:"Book Name must be in Alphabetical Format"})
    @Matches( /^[a-zA-Z\s-:]+$/, {message:"Book Name must be in Alphabetical Format"})
    Name: string;

    @IsNumber({},{message:"ICBN is can only be Numbers"})
    @Min(0,{message:"ICBN number can not be negative"})
    ICBN : number = -1;
    
    @IsNumber({},{message:"Price Can not be textual or Alphabetical Format"})
    @Min(0,{message:"Price can not be negative"})
    Price : number = -1;

    Image : string;

}



export class FeedbackDTO {


    @IsEmail({}, {message:"Invalid Email"})
    Mail : string;
    Message : string;
    Time: string;


}

export class SellerDTO{

    @IsNumber({},{message:"ID must be in Integer Format"})
    @Min(0,{message:"ID must be greater or equal than 0"})
    Id : number = -1;

    @IsString({message:"Name must be in Alphabetical Format"})
    @Matches( /^[a-zA-Z\s.]+$/, {message:"You can not use any special characters or symbols in Name"})
    Name: string;

    @IsEmail({}, {message:"Invalid Email"})
    Mail : string;


    @IsString()
    @NotEquals('username', {message: 'Password must not be the same as your username'})
    @NotEquals('email', {message: 'Password must not be the same as your email'})
    Password : number = -1;

    @IsNumber({},{message:"Phone Number must be in Integer Format"})
    @Min(0,{message:"Phone Number must be greater or equal than 0"})
    Phone : number = -1;

    @IsString({message:"Address must be in Alphabetical Format"})
    @Matches( /^[a-zA-Z\s-:]+$/, {message:"Address must be in Alphabetical Format"})
    Address: string;

    @IsString({message:"City must be in Alphabetical Format"})
    @Matches( /^[a-zA-Z\s-:]+$/, {message:"City must be in Alphabetical Format"})
    City: string;

    @IsNumber({},{message:"Zip Code must be in Integer Format"})
    @Min(0,{message:"Zip Code must be greater or equal than 0"})
    ZipCode : number = -1;

    @IsString({message:"Country must be in Alphabetical Format"})
    @Matches( /^[a-zA-Z\s-:]+$/, {message:"Country must be in Alphabetical Format"})
    Country: string;

    Image : string;

    }