import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';

@ApiTags('Clientes')
@Controller('customers')
export class CustomersController {
  @Post()
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiResponse({ 
    status: 201, 
    description: 'Cliente criado com sucesso',
    type: Customer
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos fornecidos'
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCustomerDto: CreateCustomerDto) {
    // Implementação será adicionada posteriormente
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de clientes retornada com sucesso',
    type: [Customer]
  })
  findAll() {
    // Implementação será adicionada posteriormente
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um cliente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do cliente' })
  @ApiResponse({ 
    status: 200, 
    description: 'Cliente encontrado',
    type: Customer
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Cliente não encontrado'
  })
  findOne(@Param('id') id: string) {
    // Implementação será adicionada posteriormente
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um cliente' })
  @ApiParam({ name: 'id', description: 'ID do cliente' })
  @ApiResponse({ 
    status: 200, 
    description: 'Cliente atualizado com sucesso',
    type: Customer
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Cliente não encontrado'
  })
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    // Implementação será adicionada posteriormente
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cliente' })
  @ApiParam({ name: 'id', description: 'ID do cliente' })
  @ApiResponse({ 
    status: 204, 
    description: 'Cliente removido com sucesso'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Cliente não encontrado'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    // Implementação será adicionada posteriormente
  }
} 