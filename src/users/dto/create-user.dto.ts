import { Type } from 'class-transformer';
import { IsEmail, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested, isPhoneNumber } from 'class-validator';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;
    name: string;

  }

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
    name: string;
    phone: number;
    age: number;
    gender: string;
    address: string;

    @IsNotEmpty()
    @IsMongoId()
    role: mongoose.Schema.Types.ObjectId;

    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company: Company;
}

export class RegisterUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
    name: string;
    phone: number;
    age: number;
    gender: string;
    address: string;
    
}
export class UserLoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'email@gmail.com', description: 'userName' })
    readonly username: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
    example: '123456',
    description: 'password',
    })
    readonly password: string;
    }