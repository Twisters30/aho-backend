import { IsString, IsOptional, IsInt, IsArray, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateServiceDto } from '../service/create-service.dto';

enum OrderStatus {
  NEW = 'NEW',
  CLOSED = 'CLOSED',
}

export class CreateOrderDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  userId?: number; // ID пользователя, к которому относится заказ

  @IsString()
  typeOrder: string;

  @IsArray()
  service: CreateServiceDto[]; // Массив услуг, относящихся к заказу

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @Type(() => Date)
  creaatedAt: Date; // Убедитесь, что этот атрибут будет установлен правильно
}
