import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common/';
import { Balance } from './balance.interface';
import { CreateBalanceDto } from './balance.dto';

@Injectable()
export class BalanceService {

  constructor(@InjectModel('Balance') private readonly balanceModel: Model<Balance>){}

  async findAll(): Promise<Balance[]> {
    return await this.balanceModel.find().exec();
  }

  async create(income: CreateBalanceDto): Promise<Balance[]> {
    const createdIncome = new this.balanceModel(income);
    await createdIncome.save();
    return this.findAll();
  }

  async updateOne(_id: string, incomeData: CreateBalanceDto) {
    return new Promise ((resolve, reject) => {
        this.balanceModel.findOneAndUpdate(
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
    try {
      await this.balanceModel.deleteOne({_id});
      return this.findAll();
    } catch (error) {
      return error;
    }
  }

}
