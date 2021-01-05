import { Financial_Services_Intefrace } from "../Contracts/financial_Services_Intefrace";
import { Transaction } from "./transaction";

export abstract class Bank_Account implements Financial_Services_Intefrace{

  protected number: number;
  protected balance: number;
  protected ownerId: string;
  protected city: string;

  public consing(transaction: Transaction) {
    this.balance += transaction.value;
  }


  public remove(transaction: Transaction) {
    this.balance -= transaction.value;
  }

  abstract transfer(transaction: Transaction);


}