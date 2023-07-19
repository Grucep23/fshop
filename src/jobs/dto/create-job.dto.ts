import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, Validate, ValidateNested } from 'class-validator';
import mongoose, { Types } from 'mongoose';
import { Transform, Type } from 'class-transformer';

class Company{
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  logo: string;
}

export class CreateJobDto {
    
  @IsNotEmpty()
  name: string;
  password: string;
  salary: number;
  quantity: number;
  level: string;
  description: string;
  location: string;

  @IsArray()
  @IsString({each: true})
  @IsNotEmpty()
  skills: string[];

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @IsBoolean()
    isActive: boolean;
  
    @IsNotEmpty()
    @Transform(({value}) => new Date(value))
    @IsDate()
    startDate: Date
    endDate: Date

   
}

