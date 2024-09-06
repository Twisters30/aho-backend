import { IsString, IsOptional, IsBoolean, IsInt } from 'class-validator';

export class CreateContactDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  surname?: string;

  @IsString()
  phone: string;

  @IsBoolean()
  isSupervisor: boolean;

  @IsInt()
  employeeId: number; // ID пользователя, к которому относится контакт
}
