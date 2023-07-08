import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {

  
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  birthday: Date;

  @Prop()
  sex: string;

  @Prop()
  phone: number;

  @Prop()
  address: string;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deleteAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);