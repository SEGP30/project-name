import { Transaction } from "../Entity/transaction";

export interface Financial_Services_Intefrace{

  consing(transaction: Transaction);
  transfer(transaction: Transaction);
  remove(transaction: Transaction);

}