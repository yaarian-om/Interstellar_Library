import { IsEmail, IsIn, IsInt, IsString } from "class-validator";

export class ModeratorDto {
    id:number;
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}

export class CustomerDto {
    id:number;
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}

export class SellerDto {
    id:number;
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
}