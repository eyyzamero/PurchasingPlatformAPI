import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255 })
  login: string;

  @Column({ length: 255 })
  password: string;
}