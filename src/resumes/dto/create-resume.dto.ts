import { IsMongoId, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateResumeDto{
    @IsNotEmpty()
    userId: mongoose.Schema.Types.ObjectId;
    email: string;
    url: string;
    companyId: mongoose.Schema.Types.ObjectId;
    status: string;
    jobId: mongoose.Schema.Types.ObjectId;
  }
  
  export class CreateUserCvDto {
      
    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    @IsMongoId()
    companyId: mongoose.Schema.Types.ObjectId;

    
    @IsNotEmpty()
    @IsMongoId()
    jobId: mongoose.Schema.Types.ObjectId;  
  }
  
  
