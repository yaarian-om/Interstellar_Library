import { CustomerEntity, ModeratorEntity } from "src/moderator/moderator.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin")
export class AdminEntity {
  @PrimaryGeneratedColumn()
  Admin_ID: number;

  @Column()
  Name: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  // One to Many Relationships. One Admin can manage multiple Customers
  //@OneToMany(() => CustomerEntity, customer => customer.admin)
  //customers: CustomerEntity[];

  // One to Many Relationships. One Admin can manage multiple Moderators
  @OneToMany(() => ModeratorEntity, moderator => moderator.admin)
  moderators: ModeratorEntity[];
}