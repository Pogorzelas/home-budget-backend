import { BalanceType } from './enums/BalanceType.enum';

export interface Balance {
  _id: string;
  type: BalanceType;
  source: string;
  amount: number;
}
