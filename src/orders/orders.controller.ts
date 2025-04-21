import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';

@ApiTags('Pedidos')
@Controller('orders')
export class OrdersController {
  @Post()
  @ApiOperation({ summary: 'Criar um novo pedido' })
  @ApiResponse({ 
    status: 201, 
    description: 'Pedido criado com sucesso',
    type: Order
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos fornecidos'
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrderDto: CreateOrderDto) {
    // Implementação será adicionada posteriormente
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pedidos' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de pedidos retornada com sucesso',
    type: [Order]
  })
  findAll() {
    // Implementação será adicionada posteriormente
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um pedido pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do pedido' })
  @ApiResponse({ 
    status: 200, 
    description: 'Pedido encontrado',
    type: Order
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Pedido não encontrado'
  })
  findOne(@Param('id') id: string) {
    // Implementação será adicionada posteriormente
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um pedido' })
  @ApiParam({ name: 'id', description: 'ID do pedido' })
  @ApiResponse({ 
    status: 200, 
    description: 'Pedido atualizado com sucesso',
    type: Order
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Pedido não encontrado'
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    // Implementação será adicionada posteriormente
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um pedido' })
  @ApiParam({ name: 'id', description: 'ID do pedido' })
  @ApiResponse({ 
    status: 204, 
    description: 'Pedido removido com sucesso'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Pedido não encontrado'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    // Implementação será adicionada posteriormente
  }
} 