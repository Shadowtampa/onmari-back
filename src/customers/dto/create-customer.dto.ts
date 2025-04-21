import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Nome completo do cliente',
    example: 'João da Silva',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Documento de identificação (CPF/CNPJ)',
    example: '123.456.789-00',
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
    example: 'joao@exemplo.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Endereço completo',
    example: 'Rua das Flores, 123 - Centro - São Paulo/SP',
  })
  @IsString()
  @IsNotEmpty()
  endereco: string;
} 