import { IsString, IsNumber, Matches, Min, IsEmail, NotEquals, IsInt, IsPositive, MinLength, MaxLength, IsNotEmpty, Max } from "class-validator";


export class BookDTO {

    // Book_ID
    @IsNotEmpty({ message: 'Book ID cannot be empty or null' })
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
    @MaxLength(7, { message: 'Price number should not be more than 7 characters long' })
    Price : string;

    // Book_Image
    @IsString({ message: 'Book Image Name should be a string' })
    Book_Image : string;

    
}



export class FeedbackDTO {


    // Feedback_ID
    @IsNotEmpty({ message: 'Feedback ID cannot be empty or null' })
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
    Sender_ID : number;

    // Receiver_ID
    @IsInt({ message: 'Feedback Receiver ID should be an integer' })
    Receiver_ID : number;

    // Receiver_Type
    @IsString({ message: 'Receiver Type should be a string' })
    Receiver_Type : string;



}

export class SellerDTO{


    // Seller_ID
    @IsNotEmpty({ message: 'Seller ID cannot be empty or null' })
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


    // // Address
    // @IsString({ message: 'Address should be a string' })
    // Address: string;

    // Profile_Picture
    @IsString({ message: 'Profile Picture Name should be a string' })
    Profile_Picture : string;

}

export class AddressDTO{

    // Address_ID
    @IsNotEmpty({ message: 'Address ID cannot be empty or null' })
    Address_ID : number;


    // Street
    @IsNotEmpty({ message: 'Seller Street Address cannot be empty or null' })
    @IsString({ message: 'Street should be a string' })
    Street : string;

    // Building
    @IsString({ message: 'Building should be a string' })
    Building : string;

    // City
    @IsNotEmpty({ message: 'Seller City Address cannot be empty or null' })
    @IsString({ message: 'City should be a string' })
    City : string;

    // Country
    @IsNotEmpty({ message: 'Seller Country Address cannot be empty or null' })
    @IsString({ message: 'Country should be a string' })
    Country : string;

    // ZIP
    @IsNotEmpty({ message: 'Seller ZIP Address cannot be empty or null' })
    ZIP : string;

}