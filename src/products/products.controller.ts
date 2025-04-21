import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';

@ApiTags('Produtos')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ 
    status: 201, 
    description: 'Produto criado com sucesso',
    type: Product
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos fornecidos'
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de produtos retornada com sucesso',
    type: [Product]
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um produto pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do produto' })
  @ApiResponse({ 
    status: 200, 
    description: 'Produto encontrado',
    type: Product
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Produto não encontrado'
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  @ApiParam({ name: 'id', description: 'ID do produto' })
  @ApiResponse({ 
    status: 200, 
    description: 'Produto atualizado com sucesso',
    type: Product
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Produto não encontrado'
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um produto' })
  @ApiParam({ name: 'id', description: 'ID do produto' })
  @ApiResponse({ 
    status: 204, 
    description: 'Produto removido com sucesso'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Produto não encontrado'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
} 