import * as mongoose from 'mongoose';

export const BalanceSchema = new mongoose.Schema({
  id: String,
  type: String,
  source: String,
  amount: Number,
});
