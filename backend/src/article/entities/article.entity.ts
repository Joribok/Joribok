import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column()
  userId: string;

  @Column()
  plans: string;

  @Column()
  comments: string;

  @Column()
  gauge: number;
}
