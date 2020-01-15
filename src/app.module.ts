import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BalanceModule } from './modules/balance/balance.module';

@Module({
  imports: [BalanceModule, MongooseModule.forRoot('mongodb://localhost/Home-Budget')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
