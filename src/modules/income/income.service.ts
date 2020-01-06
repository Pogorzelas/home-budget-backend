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

}
