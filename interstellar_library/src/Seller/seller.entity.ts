import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

    @Column({length: 120})
    Address: string;

    @Column()
    Profile_Picture : string;


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
    password: string;

    @Column()
    ISBN: string;

    @Column()
    Condition: string;

    @Column()
    Price: string;

    @Column()
    Book_Image: string;

    @Column()
    Seller_ID: string;

    


}