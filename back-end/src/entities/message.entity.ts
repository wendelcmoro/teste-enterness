import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  sender: number;

  @Column()
  receiver: number;
}
