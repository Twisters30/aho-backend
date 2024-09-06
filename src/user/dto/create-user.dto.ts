import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { OrderStatus, Role } from '@prisma/client';
import { CreateContactDto } from './contact/create-contact.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  address: string;

  @IsArray()
  @IsOptional() // Контакты могут быть необязательными
  contacts?: CreateContactDto[];

  @IsArray()
  @IsOptional() // Заказы могут быть необязательными
  orders?: OrderStatus[];

  @IsEnum(Role)
  @IsOptional()
  role?: Role; // Роль может быть необязательной

  @IsInt()
  roleId: number;

  @IsDate()
  @Type(() => Date) // Понимаем, что это объект Date
  @IsOptional() // Дата создания может быть установлена по умолчанию
  createdAt?: Date;

  @IsDate()
  @Type(() => Date) // Понимаем, что это объект Date
  updatedAt: Date;
}
