import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSupplierDto } from './create-supplier.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @ApiProperty({
    description: 'ID do fornecedor',
    example: 1,
  })
  id: number;
} 