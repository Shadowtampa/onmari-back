import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from '../../customers/models/customer.model';
import { OrderItem } from './order-item.model';

export enum OrderStatus {
  PENDENTE = 'PENDENTE',
  PROCESSANDO = 'PROCESSANDO',
  CONCLUIDO = 'CONCLUIDO',
  CANCELADO = 'CANCELADO'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
  cliente: Customer;

  @Column()
  data: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDENTE
  })
  status: OrderStatus;

  @Column('decimal', { precision: 10, scale: 2 })
  valor_total: number;

  @OneToMany(() => OrderItem, item => item.pedido)
  itens: OrderItem[];
} 