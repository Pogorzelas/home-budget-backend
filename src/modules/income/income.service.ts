import { Income } from './income.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Component } from '@nestjs/common/';

@Component()
export class IncomeService {

  constructor(@InjectModel('Income') private readonly incomeModel: Model<Income>){}

  async findAll(): Promise<Income[]> {
    return await this.incomeModel.find().exec();
  }

}
