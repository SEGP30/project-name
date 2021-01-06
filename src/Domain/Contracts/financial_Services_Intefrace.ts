import { Transaction } from "../Entity/transaction";

export interface Financial_Services_Intefrace{

  consing(transaction: Transaction);
  transfer(transaction: Transaction, account: Financial_Services_Intefrace);
  remove(transaction: Transaction);

}