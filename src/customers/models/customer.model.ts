import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  documento: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @Column('text')
  endereco: string;
} 