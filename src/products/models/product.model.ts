import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  sku: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco_venda: number;

  @Column('decimal', { precision: 10, scale: 2 })
  preco_custo: number;

  @Column()
  estoque: number;
} 