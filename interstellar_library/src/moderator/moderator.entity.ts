import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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