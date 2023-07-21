import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateResumeDto, CreateUserCvDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { IUser } from 'src/users/users.interface';
import { Resume, ResumeDocument } from './schemas/resume.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class ResumesService {
  constructor(
    @InjectModel(Resume.name) 
    private resumeModel: SoftDeleteModel<ResumeDocument>) { } 


  async create(createUserCvDto: CreateUserCvDto, user: IUser) {
    const{url, companyId, jobId} = createUserCvDto;
    const {email, _id} = user;

    const newCv = await this.resumeModel.create({
      url, companyId, jobId, email,
      userId: _id,
      status: "PENDING",
      createdBy:{_id,email},
      history:[{
        status: "PENDING",
        updatedAt: new Date,
        updatedBy:{
          _id: user._id,
          email: user.email
        }
      }]
      })
      return {
        _id: newCv?._id,
        createdAt: newCv?.createdAt,
      }
      }
      async update(_id: string, status: string, user: IUser){
        if(!mongoose.Types.ObjectId.isValid(_id)){
         throw new BadRequestException("not found resume")}

        const updated = await this.resumeModel.updateOne(
          {_id},
          {
            status,
            updatedBy:{
              _id: user._id,
              email: user.email,
            },
            $push: {
              history:{
                status: status,
                updatedAt: new Date,
                updatedBy:{
                  _id: user._id,
                 email: user.email,
                }
              }
            }
          });

          return updated;
      }

      async findAll(currentPage: number, limit: number, qs: string) {
        const { filter, sort, population, projection} = aqp(qs);
        delete filter.current;
        delete filter.pageSize;
    
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 10;
    
        const totalItems = (await this.resumeModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
       
        const result = await this.resumeModel.find(filter)
        .skip(offset)
        .limit(defaultLimit)
        // @ts-ignore: Unreachable code error
        .sort(sort)
        .populate(population)
        .select(projection as any)
        .exec()
        return {
          meta: {
          current: currentPage, //trang hiện tại
          pageSize: limit, //số lượng bản ghi đã lấy
          pages: totalPages, //tổng số trang với điều kiện query
          total: totalItems // tổng số phần tử (số bản ghi)
          },
          result //kết quả quer
      }}

      async findOne(id: string) {
        if(!mongoose.Types.ObjectId.isValid(id))
          throw new BadRequestException('not found resume');
    
          return await this.resumeModel.findById(id)
      }

      async findByUsers(user: IUser){
        return await this.resumeModel.find({
          userId: user._id
        })
        .sort("-createdAt")
.populate([
{
path: "companyId",
select: { name: 1 }
},
{
path: "jobId",
select: { name: 1 }
}
])

      }

      async remove(id: string, user: IUser) {
        if(!mongoose.Types.ObjectId.isValid(id))
        return 'not found resume';
    
        await this.resumeModel.updateOne(
          {_id: id},
          {
            deletedBy:{
              _id: user._id,
              email: user.email,
            }
          },
        )
        return this.resumeModel.softDelete({_id: id})
      }
}
