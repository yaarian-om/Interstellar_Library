import { IsEmail, IsIn, IsInt, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class ModeratorDto {
    @IsNotEmpty({ message: 'Moderator ID cannot be empty or null' })
    id:number;

    @IsString({ message: 'Moderator Name should be a string' })
    @MinLength(3, { message: 'Moderator Name should be at least 3 characters long' })
    @MaxLength(50, { message: 'Moderator Name should not be more than 50 characters long' })
    name:string;

    @IsNotEmpty({ message: 'Moderator Name cannot be empty or null' })
    @IsEmail({}, { message: 'Please enter a valid email address' })
    @MaxLength(100, { message: 'Email should not be more than 100 characters long' })
    email:string;

    @IsNotEmpty({ message: 'Moderator Password cannot be empty or null' })
    @IsString({ message: 'Password should be a string' })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/, { message: 'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and is at least 8 characters long.' })
    password:string;
}

export class CustomerDto {
    @IsNotEmpty({ message: 'Customer ID cannot be empty or null' })
    id:number;

    @IsString({ message: 'Customer Name should be a string' })
    @MinLength(3, { message: 'Customer Name should be at least 3 characters long' })
    @MaxLength(50, { message: 'Customer Name should not be more than 50 characters long' })
    name:string;

    @IsNotEmpty({ message: 'Customer Name cannot be empty or null' })
    @IsEmail({}, { message: 'Please enter a valid email address' })
    @MaxLength(100, { message: 'Email should not be more than 100 characters long' })
    email:string;

    @IsNotEmpty({ message: 'Customer Password cannot be empty or null' })
    @IsString({ message: 'Password should be a string' })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/, { message: 'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and is at least 8 characters long.' })
    password:string;
}