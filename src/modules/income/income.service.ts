import { Income } from './income.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common/';
import { CreateIncomeDto } from './income.dto';

@Injectable()
export class IncomeService {

  constructor(@InjectModel('Income') private readonly incomeModel: Model<Income>){}

  async findAll(): Promise<Income[]> {
    return await this.incomeModel.find().exec();
  }

  async create(income: CreateIncomeDto): Promise<Income[]> {
    const createdIncome = new this.incomeModel(income);
    await createdIncome.save();
    return await this.findAll();
  }

  async updateOne(_id: string, incomeData: CreateIncomeDto) {
    return new Promise ((resolve, reject) => {
        this.incomeModel.findOneAndUpdate(
          {
            _id,
          },
          incomeData,
          {
            new: true,
          },
          (error, response) => {
            if (error) {
              reject(error);
            } else {
              resolve(response._doc);
            }
          },
        );
    });
  }

  async deleteOne(_id: string) {
    return await this.incomeModel.deleteOne({_id});
  }

}
