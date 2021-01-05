import { Bank_Account } from "./bank_Account";
import { Financial_Movement } from "./financial_Movement";
import { Transaction } from "./transaction";


export class Current_Account extends Bank_Account{

  public movements: Financial_Movement[];

  constructor() {

    super();
    this.movements = []

  }

  cupo_Sobregiro: number;
  minimal_Balance: number;
  cuatro_Mil = new Transaction();

  public consing(transaction: Transaction){

    if(transaction.value >= 100000)
      super.consing(transaction);

  }
  public remove(transaction: Transaction){

    this.cuatro_Mil.value = (transaction.value * 4)/1000;

    if(this.minimal_Balance >= this.cupo_Sobregiro)
      super.remove(this.cuatro_Mil);

  }


  public transfer();

}