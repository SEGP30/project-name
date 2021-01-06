import { Financial_Services_Intefrace } from "../Contracts/financial_Services_Intefrace";
import { Transaction } from "./transaction";
import { Financial_Movement } from "./financial_Movement";

export abstract class Bank_Account implements Financial_Services_Intefrace{

  public number: string;
  public balance: number;
  public ownerId: string;
  public city: string;
  public movements:Financial_Movement[];

  constructor() {

    this.movements = []

  }

  public consing(transaction: Transaction) {

    let new_Movement = new Financial_Movement();
    new_Movement.type = 'Consignacion';
    new_Movement.date = new Date();
    new_Movement.value = transaction.value;
    this.balance += transaction.value;
    this.movements.push(new_Movement);
  }


  public abstract remove(transaction: Transaction);

  public transfer(transaction: Transaction, account: Financial_Services_Intefrace){
    //TODO: VALIDAR SI PUEDE RETIRAR PRIMERO
    this.remove(transaction);
    account.consing(transaction);

  };


}