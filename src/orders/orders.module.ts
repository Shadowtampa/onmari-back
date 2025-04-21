import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { Order } from './models/order.model';
import { OrderItem } from './models/order-item.model';
import { Customer } from '../customers/models/customer.model';
import { Product } from '../products/models/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Customer, Product])],
  controllers: [OrdersController],
  providers: [],
})
export class OrdersModule {} 