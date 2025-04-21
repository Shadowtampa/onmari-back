import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderStatus } from '../models/order.model';

export class OrderItemDto {
  @ApiProperty({
    description: 'ID do produto',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  produto_id: number;

  @ApiProperty({
    description: 'Quantidade do produto',
    example: 2,
    minimum: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @ApiProperty({
    description: 'Preço unitário do produto',
    example: 199.99,
    minimum: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  preco_unitario: number;
}

export class CreateOrderDto {
  @ApiProperty({
    description: 'ID do cliente',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  cliente_id: number;

  @ApiProperty({
    description: 'Status do pedido',
    example: OrderStatus.PENDENTE,
    enum: OrderStatus,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @ApiProperty({
    description: 'Itens do pedido',
    type: [OrderItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  itens: OrderItemDto[];
} 