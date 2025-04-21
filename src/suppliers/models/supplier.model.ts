import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from '../../products/models/product.model';

@Entity()
export class Supplier {
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

  @ManyToMany(() => Product)
  @JoinTable({
    name: 'supplier_products',
    joinColumn: {
      name: 'supplier_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  produtos_fornecidos: Product[];
} 