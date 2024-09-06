import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsInt()
  quantity: number;

  @IsString()
  quantityType: string;

  @IsInt()
  serviceTypeId: number; // ID типа услуги
}
