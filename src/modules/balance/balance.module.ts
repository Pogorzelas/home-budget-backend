import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { BalanceSchema } from './balance.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Balance', schema: BalanceSchema }])],
  providers: [BalanceService],
  controllers: [BalanceController],
})
export class BalanceModule {}
