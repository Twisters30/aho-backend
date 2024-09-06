import { IsString, IsInt } from 'class-validator';

export class CreateServiceTypeDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
