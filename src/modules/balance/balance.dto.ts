import { BalanceType } from './enums/BalanceType.enum';

export class CreateBalanceDto {
  public readonly source: string;
  public readonly amount: number;
  public readonly type: BalanceType;
}
