import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-Job.dto';

export class UpdateJobDto extends PartialType(CreateJobDto) {}
