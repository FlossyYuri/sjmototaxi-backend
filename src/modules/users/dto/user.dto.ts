import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsUrl,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { User } from '../user.entity';

export class UserDto extends PartialType(User) {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly fullName: string;
  @IsNotEmpty()
  @MinLength(4)
  readonly password: string;
  @IsNotEmpty()
  @MinLength(4)
  readonly confirmPassword: string;
  @IsNotEmpty()
  @IsOptional()
  readonly role: string;
  @IsNotEmpty()
  readonly phone: string;
}

export class UpdateUserDto extends PartialType(User) {
  @IsNotEmpty()
  @IsOptional()
  readonly phone: string;
  @IsNotEmpty()
  @IsUrl()
  @IsOptional()
  readonly image: string;
  @IsNotEmpty()
  @IsOptional()
  readonly role: string;
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  readonly coins: number;
  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  readonly premium: boolean;
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  readonly tests: number;
}
