import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Smartphone XYZ',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Código SKU único do produto',
    example: 'SM-XYZ-001',
  })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({
    description: 'Preço de venda do produto',
    example: 1999.99,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  preco_venda: number;

  @ApiProperty({
    description: 'Preço de custo do produto',
    example: 1500.00,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  preco_custo: number;

  @ApiProperty({
    description: 'Quantidade em estoque',
    example: 100,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  estoque: number;
} 