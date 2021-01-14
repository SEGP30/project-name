import { Transaction } from "../Entity/transaction";

export interface Ifinancial_Services {

  consign(transaction: Transaction);
  transfer(transaction: Transaction, account: Ifinancial_Services);
  remove(transaction: Transaction);

}