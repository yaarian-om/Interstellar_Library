import { AdminEntity } from "src/Administrator/administrator.entity";
import { AddressEntity } from "src/Seller/seller.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToOne(() => AdminEntity, admin => admin.moderators)
  admin: AdminEntity;
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