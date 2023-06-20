import { IsEmail, IsIn, IsInt, IsString } from "class-validator";

export class ModeratorDto {
    id:number;
    name:string;
    @IsEmail()
    email:string;
    password:string;
}