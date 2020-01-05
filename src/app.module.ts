import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './modules/income/income.module';

@Module({
  imports: [IncomeModule, MongooseModule.forRoot('mongodb://localhost/Home-Budget')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
