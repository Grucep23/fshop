import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import mongoose, { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema({timestamps: true})
export class Job {

  
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  skills: string[];

  @Prop({type: Object})
  company:{
    _id: mongoose.Schema.Types.ObjectId,
    name: string,
    logo: string,
  }

  @Prop()
  location: string;

  @Prop()
  salary: number;

  @Prop()
  quantity: number;

  @Prop()
  level: string;

  @Prop()
  description: string;

  @Prop()
  startDate: Date;

  @Prop()
  endtDate: Date;

  
  @Prop()
  isActive: boolean;

  @Prop({type: Object})
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId,
    email: string,
  };

  @Prop({type: Object})
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId,
    email: string,
  };

  @Prop({type: Object})
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId,
    email: string,
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;


  @Prop()
  isDeleted: boolean;

  @Prop()
  deleteAt: Date;

}

export const JobSchema = SchemaFactory.createForClass(Job);