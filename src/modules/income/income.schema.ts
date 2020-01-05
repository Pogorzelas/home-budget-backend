import * as mongoose from 'mongoose';

export const IncomeSchema = new mongoose.Schema({
  id: String,
  source: String,
  amount: Number,
});
