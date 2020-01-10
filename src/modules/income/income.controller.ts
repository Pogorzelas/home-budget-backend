import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch(':id')
  updateOne(@Body() incomeToUpdate, @Param('id') id) {
    return this.incomeService.updateOne(id, incomeToUpdate);
  }

  @Delete(':id')
  deleteOne(@Param('id') id) {
    return this.incomeService.deleteOne(id);
  }
}
