import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './models/supplier.model';

@ApiTags('Fornecedores')
@Controller('suppliers')
export class SuppliersController {
  @Post()
  @ApiOperation({ summary: 'Criar um novo fornecedor' })
  @ApiResponse({ 
    status: 201, 
    description: 'Fornecedor criado com sucesso',
    type: Supplier
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos fornecidos'
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSupplierDto: CreateSupplierDto) {
    // Implementação será adicionada posteriormente
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os fornecedores' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de fornecedores retornada com sucesso',
    type: [Supplier]
  })
  findAll() {
    // Implementação será adicionada posteriormente
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um fornecedor pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do fornecedor' })
  @ApiResponse({ 
    status: 200, 
    description: 'Fornecedor encontrado',
    type: Supplier
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Fornecedor não encontrado'
  })
  findOne(@Param('id') id: string) {
    // Implementação será adicionada posteriormente
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um fornecedor' })
  @ApiParam({ name: 'id', description: 'ID do fornecedor' })
  @ApiResponse({ 
    status: 200, 
    description: 'Fornecedor atualizado com sucesso',
    type: Supplier
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Fornecedor não encontrado'
  })
  update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
    // Implementação será adicionada posteriormente
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um fornecedor' })
  @ApiParam({ name: 'id', description: 'ID do fornecedor' })
  @ApiResponse({ 
    status: 204, 
    description: 'Fornecedor removido com sucesso'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Fornecedor não encontrado'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    // Implementação será adicionada posteriormente
  }
} 