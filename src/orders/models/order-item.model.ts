import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.model';
import { Product } from '../../products/models/product.model';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.itens)
  pedido: Order;

  @ManyToOne(() => Product)
  produto: Product;

  @Column()
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  preco_unitario: number;
} 