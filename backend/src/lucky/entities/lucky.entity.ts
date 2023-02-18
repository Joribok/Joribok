import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lucky {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fortune: string;

  @Column()
  thing: string;

  @Column()
  color: string;
}
