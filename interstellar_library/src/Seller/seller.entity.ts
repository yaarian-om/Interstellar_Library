import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";

@Entity("seller")
export class SellerEntity{
    @PrimaryGeneratedColumn()
    Seller_ID: number;

    @Column()
    Name: string;

    @Column()
    Email: string;

    @Column()
    Password: string;

    @Column()
    Phone: string;

    @Column()
    Profile_Picture : string;

    // One to Many Relationships. One Seller Can have many Books
    @OneToMany(()=>BookEntity, book=>book.seller)
    books: BookEntity[];

    // //  One to One Relationships. One Seller can have only one Address
    // @OneToOne(() => AddressEntity)
    // @JoinColumn()
    // address: AddressEntity;

}



@Entity("address")
export class AddressEntity{

    // Address_ID
    @PrimaryGeneratedColumn()
    Address_ID : number;


    // Street
    @Column()
    Street : string;

    // Building
    @Column()
    Building : string;

    // City
    @Column()
    City : string;

    // Country
    @Column()
    Country : string;

    // ZIP
    @Column()
    ZIP : string;

    //  One to One Relationships. One Seller can have only one Address
    @OneToOne(() => SellerEntity)
    @JoinColumn()
    seller: SellerEntity;
    
}



@Entity("book")
export class BookEntity{

    @PrimaryGeneratedColumn()
    Book_ID: number;

    @Column()
    Title: string;

    @Column()
    Author: string;

    @Column()
    ISBN: string;

    @Column()
    Condition: string;

    @Column()
    Price: string;

    @Column()
    Book_Image: string;

    @ManyToOne(()=> SellerEntity)
    seller: SellerEntity;
}

@Entity("feedback")
export class FeedbackEntity{


    @PrimaryGeneratedColumn()
    Feedback_ID : number;

    @Column()
    Comment : string;

    @Column()
    Date : string;

    @Column()
    Sender_ID : number;

    // Can be Null if Receiver is Admin and sender is Seller
    @Column()
    Receiver_ID : number;

    @Column()
    Receiver_Type : string;

}
