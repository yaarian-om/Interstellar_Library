import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('moderator')
export class ModeratorEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column({length:8})
    password:string;
}

@Entity('customer')
export class CustomerEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column({length:8})
    password:string;
}

@Entity('seller')
export class SellerEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column({length:8})
    password:string;
}

@Entity('book')
export class BookEntity{
    @PrimaryColumn()
    ISBN: number;
    @Column()
    title:string;
}