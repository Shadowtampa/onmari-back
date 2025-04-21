import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersService } from './customers.service';
import { Customer } from './models/customer.model';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { NotFoundException } from '@nestjs/common';

describe('CustomersService', () => {
  let service: CustomersService;
  let repository: Repository<Customer>;

  const mockCustomer = {
    id: 1,
    nome: 'Test Customer',
    documento: '12345678900',
    telefone: '11999999999',
    email: 'test@example.com',
    endereco: 'Rua Teste, 123 - Centro - São Paulo/SP',
  };

  const mockCreateCustomerDto: CreateCustomerDto = {
    nome: 'Test Customer',
    documento: '12345678900',
    telefone: '11999999999',
    email: 'test@example.com',
    endereco: 'Rua Teste, 123 - Centro - São Paulo/SP',
  };

  const mockUpdateCustomerDto: UpdateCustomerDto = {
    id: 1,
    nome: 'Updated Customer',
  };

  const mockUpdatedCustomer = {
    ...mockCustomer,
    ...mockUpdateCustomerDto,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: getRepositoryToken(Customer),
          useValue: {
            create: jest.fn().mockReturnValue(mockCustomer),
            save: jest.fn().mockImplementation((customer) => {
              if (customer === mockUpdatedCustomer) {
                return Promise.resolve(mockUpdatedCustomer);
              }
              return Promise.resolve(mockCustomer);
            }),
            find: jest.fn().mockResolvedValue([mockCustomer]),
            findOne: jest.fn().mockResolvedValue(mockCustomer),
            merge: jest.fn().mockReturnValue(mockUpdatedCustomer),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    repository = module.get<Repository<Customer>>(getRepositoryToken(Customer));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const result = await service.create(mockCreateCustomerDto);
      expect(repository.create).toHaveBeenCalledWith(mockCreateCustomerDto);
      expect(repository.save).toHaveBeenCalledWith(mockCustomer);
      expect(result).toEqual(mockCustomer);
    });
  });

  describe('findAll', () => {
    it('should return an array of customers', async () => {
      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual([mockCustomer]);
    });
  });

  describe('findOne', () => {
    it('should return a customer by id', async () => {
      const result = await service.findOne(1);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(result).toEqual(mockCustomer);
    });

    it('should throw NotFoundException when customer not found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const result = await service.update(1, mockUpdateCustomerDto);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(repository.merge).toHaveBeenCalledWith(mockCustomer, mockUpdateCustomerDto);
      expect(repository.save).toHaveBeenCalledWith(mockUpdatedCustomer);
      expect(result).toEqual(mockUpdatedCustomer);
    });

    it('should throw NotFoundException when customer not found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.update(999, mockUpdateCustomerDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a customer', async () => {
      await service.remove(1);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(repository.remove).toHaveBeenCalledWith(mockCustomer);
    });

    it('should throw NotFoundException when customer not found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);
      await expect(service.remove(999)).rejects.toThrow(NotFoundException);
    });
  });
}); 