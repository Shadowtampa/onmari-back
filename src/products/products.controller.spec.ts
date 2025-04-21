import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  const mockProduct = {
    id: 1,
    nome: 'Test Product',
    sku: 'TEST-001',
    preco_venda: 100.00,
    preco_custo: 50.00,
    estoque: 10,
  };

  const mockCreateProductDto: CreateProductDto = {
    nome: 'Test Product',
    sku: 'TEST-001',
    preco_venda: 100.00,
    preco_custo: 50.00,
    estoque: 10,
  };

  const mockUpdateProductDto: UpdateProductDto = {
    id: 1,
    nome: 'Updated Product',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockProduct),
            findAll: jest.fn().mockResolvedValue([mockProduct]),
            findOne: jest.fn().mockResolvedValue(mockProduct),
            update: jest.fn().mockResolvedValue({
              ...mockProduct,
              ...mockUpdateProductDto,
            }),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a product', async () => {
      const result = await controller.create(mockCreateProductDto);
      expect(service.create).toHaveBeenCalledWith(mockCreateProductDto);
      expect(result).toEqual(mockProduct);
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockProduct]);
    });
  });

  describe('findOne', () => {
    it('should return a product by id', async () => {
      const result = await controller.findOne('1');
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockProduct);
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const result = await controller.update('1', mockUpdateProductDto);
      expect(service.update).toHaveBeenCalledWith(1, mockUpdateProductDto);
      expect(result).toEqual({
        ...mockProduct,
        ...mockUpdateProductDto,
      });
    });
  });

  describe('remove', () => {
    it('should remove a product', async () => {
      await controller.remove('1');
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
}); 