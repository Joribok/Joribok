import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  public _id?: number;

  @Column({ unique: true })
  public userId: string;

  @Column()
  public password: string;

  @Column({ unique: true })
  public nickname: string;
}
