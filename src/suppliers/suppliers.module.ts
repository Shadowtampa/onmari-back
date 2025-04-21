import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersController } from './suppliers.controller';
import { Supplier } from './models/supplier.model';
import { Product } from '../products/models/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier, Product])],
  controllers: [SuppliersController],
  providers: [],
})
export class SuppliersModule {} 