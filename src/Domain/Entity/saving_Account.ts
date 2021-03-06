import { Bank_Account } from "./bank_Account";
import { Transaction } from "./transaction";
import { Financial_Movement } from "./financial_Movement";

export class Saving_Account extends Bank_Account {

  public consign(transaction: Transaction) {
    this.validateDifferentCityDiscount(transaction);
    if(this.validateFirstMovements() && transaction.value >= 50000){
      super.consign(transaction);
    }else if(!this.validateFirstMovements() && transaction.value > 0){
      super.consign(transaction);
    }
  }

  public remove(transaction: Transaction) {
    if(this.validateRemoveByMonth())
      transaction.value += 5000;

    if(this.validateMinBalance(transaction.value)){
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

  validateDifferentCityDiscount(transaction:Transaction){
    if(transaction.city != this.city)
      transaction.value -= 10000;
  }

  validateMinBalance(value: number){
    let difference: number = this.balance - value;
    return difference >= 20000;
  }

  validateRemoveByMonth(){
    let counter: number = 0;
    if(this.movements.length < 3)
      return false;

    this.movements.forEach((movement) => {
      if(movement.date.getMonth() == new Date().getMonth() && movement.type == 'Retiro'){
        counter++;
      }
    });

    return counter >= 3;

  }

  transfer(transaction: Transaction) {}

}