import { Bank_Account } from "../../Domain/Entity/bank_Account";
import { Transaction } from "../../Domain/Entity/transaction";
import { Unit_Of_Work } from "../../Infrastructure/Base/unit_Of_Work";


export class Remove_Saving_Account_Service{

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  async execute(request: Remove_Saving_Account_Request): Promise<Remove_Saving_Account_Response>{

    try{

      const account_Searched: Bank_Account = await this.unit_Of_Work.saving_Account_Repository.find_Entity(request.number);

      if(account_Searched == undefined){

        return new Remove_Saving_Account_Response('La cuenta a retirar no existe');

      }

      const balance: number = account_Searched.balance;
      const transaction: Transaction = new Transaction();

      transaction.value = request.value;

      account_Searched.remove(transaction);

      if(account_Searched.balance == balance){

        return new Remove_Saving_Account_Response('Retiro no realizado. Valor de la transferencia incorrecto, debe ser mayor que 0');

      } else{

        await this.unit_Of_Work.start();
        await this.unit_Of_Work.saving_Account_Repository.save(account_Searched);
        return new Remove_Saving_Account_Response('Retiro realizado');

      }

    } catch(e){

      return new Remove_Saving_Account_Response('Se ha presentado un error al momento de consignar en esta cuenta bancaria');

    }

  }

}

export class Remove_Saving_Account_Request{
  constructor(
    public readonly number: string,
    public readonly value: number
  ) {
  }
}

export class Remove_Saving_Account_Response{
  constructor(public readonly message: string){}
}