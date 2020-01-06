import { Body, Controller, Get, Post } from '@nestjs/common';
import { IncomeService } from './income.service';

@Controller('incomes')
export class IncomeController {

  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }

  @Post()
  create(@Body() incomeData) {
    return this.incomeService.create(incomeData);
  }

}
