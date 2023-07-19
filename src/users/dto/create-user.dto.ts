import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import mongoose from 'mongoose';

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;
    name: string;

  }

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    password: string;
    name: string;
    phone: number;
    age: number;
    gender: string;
    address: string;
    role: string;

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
    password: string;
    name: string;
    phone: number;
    age: number;
    gender: string;
    address: string;
    
}