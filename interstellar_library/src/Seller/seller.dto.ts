import { IsString, IsNumber, Matches, Min } from "class-validator";


export class AddBooksDTO {

    @IsNumber({},{message:"ID must be in Integer Format"})
    @Min(0,{message:"ID must be greater or equal than 0"})
    Id : number;

    @IsString({message:"Book Name must be in Alphabetical Format"})
    @Matches( /^[a-zA-Z\s-:]+$/, {message:"Book Name must be in Alphabetical Format"})
    Name: string;

    @IsNumber({},{message:"ICBN is can only be Numbers"})
    @Min(0,{message:"ICBN number can not be negative"})
    ICBN : number;
    
    @IsNumber({},{message:"Price Can not be textual or Alphabetical Format"})
    @Min(0,{message:"Price can not be negative"})
    Price : number;

}