import { Ifinancial_Services } from "../Contracts/Ifinancial_Services";
import { Transaction } from "./transaction";
import { Financial_Movement } from "./financial_Movement";
import { ObjectID } from "typeorm";

export abstract class Bank_Account implements Ifinancial_Services{

  public _id: ObjectID;
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

  public transfer(transaction: Transaction, account: Ifinancial_Services){
    //TODO: VALIDAR SI PUEDE RETIRAR PRIMERO
    this.remove(transaction);
    account.consing(transaction);

  };


}