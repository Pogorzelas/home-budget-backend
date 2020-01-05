import { Controller, Get } from '@nestjs/common';
import { IncomeService } from './income.service';

@Controller('incomes')
export class IncomeController {

  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }

}
