import { Bank_Account } from "./bank_Account";
import { Transaction } from "./transaction";
import { Financial_Movement } from "./financial_Movement";


export class Current_Account extends Bank_Account{

  private readonly overdraft: number = -20000;
  private readonly minimal_First_Consign: number = 100000;

  public consing(transaction: Transaction){

    if(this.validateFirstMovements() && transaction.value >= this.minimal_First_Consign){
      super.consing(transaction);
    } else if(!this.validateFirstMovements() && transaction.value > 0)
      super.consing(transaction);

  }

  public remove(transaction){
    let new_Balance: number = this.balance - this.tax_4X1000(transaction.value);
    if(new_Balance >= this.overdraft){
      this.balance -= transaction.value;
      let new_Movement = new Financial_Movement();
      new_Movement.type = 'Retiro';
      new_Movement.date = new Date();
      new_Movement.value = transaction.value;
      this.movements.push(new_Movement);
    }
  }

  validateFirstMovements(){
    return this.movements.length == 0;
  }

  tax_4X1000(value: number){

    return value - ((value * 4)/1000);

  }

  transfer(transaction:Transaction){};

}