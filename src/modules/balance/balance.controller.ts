import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {

  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  findAll() {
    return this.balanceService.findAll();
  }

  @Post()
  create(@Body() balanceData) {
    return this.balanceService.create(balanceData);
  }

  @Patch(':id')
  updateOne(@Body() balanceToUpdate, @Param('id') id) {
    return this.balanceService.updateOne(id, balanceToUpdate);
  }

  @Delete(':id')
  deleteOne(@Param('id') id) {
    return this.balanceService.deleteOne(id);
  }
}
