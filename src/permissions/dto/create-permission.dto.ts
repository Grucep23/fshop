import { IsNotEmpty } from "class-validator";

export class CreatePermissionDto {
    
    @IsNotEmpty()
    name: string;
    apiPath: string;
    method: string;
    module: string;
  }
  
