import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './models/customer.model';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.repository.create(createCustomerDto);
    return this.repository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.repository.findOne({ where: { id } });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.findOne(id);
    const updatedCustomer = this.repository.merge(customer, updateCustomerDto);
    return this.repository.save(updatedCustomer);
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);
    await this.repository.remove(customer);
  }
} 