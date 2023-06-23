import { IsString, IsNumber, Matches, Min, IsEmail, NotEquals, IsInt, IsPositive, MinLength, MaxLength, IsNotEmpty, Max } from "class-validator";


export class BookDTO {

    // @IsNumber({},{message:"ID must be in Integer Format"})
    // @Min(0,{message:"ID must be greater or equal than 0"})
    // @IsString({message:"Book Name must be in Alphabetical Format"})
    // @Matches( /^[a-zA-Z\s-:]+$/, {message:"Book Name must be in Alphabetical Format"})
    // @IsNumber({},{message:"ICBN is can only be Numbers"})
    // @Min(0,{message:"ICBN number can not be negative"})
    // @IsNumber({},{message:"Price Can not be textual or Alphabetical Format"})
    // @Min(0,{message:"Price can not be negative"})
    

    // Book_ID
    @IsNotEmpty({ message: 'Book ID cannot be empty or null' })
    @IsInt({ message: 'Book ID should be an integer' })
    // @IsPositive({ message: 'Book ID should be a positive number' })
    Book_ID : number;

    // Title
    @IsNotEmpty({ message: 'Title cannot be empty or null' })
    @IsString({ message: 'Title should be a string' })
    @MinLength(3, { message: 'Title should be at least 3 characters long' })
    @MaxLength(50, { message: 'Title should not be more than 50 characters long' })
    Title: string;

    // Author
    @IsString({ message: 'Author Name should be a string' })
    @MinLength(3, { message: 'Author Name should be at least 3 characters long' })
    @MaxLength(50, { message: 'Author Name should not be more than 50 characters long' })
    Author : string;

    // ISBN
    @IsNotEmpty({ message: 'ISBN number cannot be empty or null' })
    @MinLength(7, { message: 'ISBN number should be at least 10 characters long' })
    @MaxLength(14, { message: 'ISBN number should not be more than 20 characters long' })
    ISBN : string;

    // Condition
    @IsString({ message: 'Condition should be a string' })
    @MinLength(3, { message: 'Condition should be at least 3 characters long' })
    @MaxLength(12, { message: 'Condition should not be more than 50 characters long' })
    Condition : string;
    

    // Price
    @IsNotEmpty({ message: 'Price cannot be empty or null' })
    @IsNumber({}, { message: 'Price should be a number' })
    @IsPositive({ message: 'Price should be a positive number' })
    @Max(29999, { message: 'Price should not exceed 29999' })
    Price : number;

    // Book_Image
    @IsString({ message: 'Book Image Name should be a string' })
    Book_Image : string;

    // Seller_ID
    @IsNotEmpty({ message: 'Seller ID cannot be empty or null' })
    @IsInt({ message: 'Seller ID should be an integer' })
    @IsPositive({ message: 'Seller ID should be a positive number' })
    Seller_ID : number;

}



export class FeedbackDTO {


    // Feedback_ID
    @IsNotEmpty({ message: 'Feedback ID cannot be empty or null' })
    @IsInt({ message: 'Feedback ID should be an integer' })
    // @IsPositive({ message: 'Feedback ID should be a positive number' })
    Feedback_ID : number;

    // Comment
    @IsString({ message: 'Name should be a string' })
    @MinLength(1, { message: 'Name should be at least 3 characters long' })
    @MaxLength(120, { message: 'Name should not be more than 50 characters long' })
    Comment : string;

    // Date [ To Show the Date in HTML, the Format Must be yyyy-MM-dd]
    @IsString({ message: 'Date should be a string' })
    Date : string;

    // Sender_ID
    @IsNotEmpty({ message: 'Sender ID cannot be empty or null' })
    @IsInt({ message: 'Feedback Sender ID should be an integer' })
    // @IsPositive({ message: 'Feedback Sender ID should be a positive number' })
    Sender_ID : number;

    // Receiver_ID
    @IsNotEmpty({ message: 'Receiver ID cannot be empty or null' })
    @IsInt({ message: 'Feedback Receiver ID should be an integer' })
    // @IsPositive({ message: 'Feedback Receiver ID should be a positive number' })
    Receiver_ID : number;



}

export class SellerDTO{

    // @IsNumber({},{message:"ID must be in Integer Format"})
    // @Min(0,{message:"ID must be greater or equal than 0"})
    // @IsEmail({}, {message:"Invalid Email"})
    // @Matches( /^[a-zA-Z\s.]+$/, {message:"You can not use any special characters or symbols in Name"})
    // @IsString()
    // @NotEquals('username', {message: 'Password must not be the same as your username'})
    // @NotEquals('email', {message: 'Password must not be the same as your email'})
    // @IsNumber({},{message:"Phone Number must be in Integer Format"})
    // @Min(0,{message:"Phone Number must be greater or equal than 0"})
    // @Matches( /^[a-zA-Z\s-:]+$/, {message:"Address must be in Alphabetical Format"})


    // Seller_ID
    @IsNotEmpty({ message: 'Seller ID cannot be empty or null' })
    @IsInt({ message: 'Seller ID should be an integer' })
    // @IsPositive({ message: 'Seller ID should be a positive number' })
    Seller_ID : number;


    // Name
    @IsString({ message: 'Seller Name should be a string' })
    @MinLength(3, { message: 'Seller Name should be at least 3 characters long' })
    @MaxLength(50, { message: 'Seller Name should not be more than 50 characters long' })
    Name: string;

    // Email
    @IsNotEmpty({ message: 'Seller Name cannot be empty or null' })
    @IsEmail({}, { message: 'Please enter a valid email address' })
    @MaxLength(100, { message: 'Email should not be more than 100 characters long' })
    Email : string;

    // Password
    @IsNotEmpty({ message: 'Seller Password cannot be empty or null' })
    @IsString({ message: 'Password should be a string' })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/, { message: 'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and is at least 8 characters long.' })
    Password :string;

    // Phone
    @IsNotEmpty({ message: 'Seller Phone Number cannot be empty or null' })
    @IsNotEmpty({ message: 'Phone number cannot be empty or null' })
    @MinLength(10, { message: 'Phone number should be at least 10 characters long' })
    @MaxLength(20, { message: 'Phone number should not be more than 20 characters long' })
    Phone : string;


    // Address
    @IsNotEmpty({ message: 'Address cannot be empty or null' })
    @MinLength(10, { message: 'Address should be at least 10 characters long' })
    @MaxLength(100, { message: 'Address should not be more than 200 characters long' })
    Address: string;

    // Profile_Picture
    @IsString({ message: 'Profile Picture Name should be a string' })
    Profile_Picture : string;

}