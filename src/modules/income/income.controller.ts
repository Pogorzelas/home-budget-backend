import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
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

  @Patch()
  updateOne(@Body() incomeToUpdate, @Query('id') id) {
    return this.incomeService.updateOne(id, incomeToUpdate);
  }

  @Delete()
  deleteOne(@Query('id') id) {
    return this.incomeService.deleteOne(id);
  }
}
