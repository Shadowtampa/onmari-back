import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, IsArray, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({
    description: 'Nome do fornecedor',
    example: 'Fornecedor XYZ Ltda',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Documento de identificação (CPF/CNPJ)',
    example: '12.345.678/0001-90',
  })
  @IsString()
  @IsNotEmpty()
  documento: string;

  @ApiProperty({
    description: 'Número de telefone',
    example: '+5511999999999',
  })
  @IsPhoneNumber()
  telefone: string;

  @ApiProperty({
    description: 'Endereço de e-mail',
    example: 'contato@fornecedorxyz.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Lista de IDs dos produtos fornecidos',
    example: [1, 2, 3],
    required: false,
  })
  @IsArray()
  @IsOptional()
  produtos_fornecidos: number[];
} 