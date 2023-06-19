import { IsString,IsNotEmpty,MinLength,MaxLength,Length,IsEmail} from "class-validator";


export class AdminDTO{
    @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
    Name: string;
    @IsString()
    Email: string;
    Password: string;
}

export class RemoveSellerDTO {
    @IsString()
    @Length(36, 36)
    sellerId: string;
  }

  export class RemoveCustomerDTO {
    @IsString()
    @Length(36, 36)
    customerId: string;
  }
  
  export class AddSellerDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: "Invalid email format" })
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    password: string;
  }

  export class ViewSellerDTO {
    @IsString()
    @Length(36, 36)
    sellerId: string;
  }

  export class BookDTO {
    @IsString()
    title: string;
  
    @IsString()
    author: string;
  
  }
  

  export class UpdateBookDTO {
    @IsString()
    @Length(36, 36)
    bookId: string;
  
  }
  
  export class DeleteBookDTO {
    @IsString()
    @Length(36, 36)
    bookId: string;
  }

  export class LogoutDTO {
    @IsString()
    @Length(36, 36)
    sellerId: string;
  }
  