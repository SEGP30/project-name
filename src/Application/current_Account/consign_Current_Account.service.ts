import { Unit_Of_Work } from "../../Infrastructure/Base/unit_Of_Work";
import { Bank_Account } from "../../Domain/Entity/bank_Account";
import { Transaction } from "../../Domain/Entity/transaction";

export class Consign_Current_Account_Service{

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  async execute(request: Consign_Current_Account_Request): Promise<Consign_Current_Account_Response>{

    try{

      const account_Searched: Bank_Account = await this.unit_Of_Work.current_Account_Repository.find_Entity(request.number);

      if(account_Searched == undefined){

        return new Consign_Current_Account_Response('La cuenta a consignar no existe');

      }

      const balance: number = account_Searched.balance;
      const transaction: Transaction = new Transaction();

      transaction.value = request.value;

      account_Searched.consign(transaction);

      if(account_Searched.balance == balance){

        return new Consign_Current_Account_Response('Consignación no realizada. Valor de la transferencia incorrecto, debe ser mayor que 0');

      } else{

        await this.unit_Of_Work.start();
        await this.unit_Of_Work.current_Account_Repository.save(account_Searched);
        return new Consign_Current_Account_Response('Consignación realizada');

      }

    } catch(e){

      return new Consign_Current_Account_Response('Se ha presentado un error al momento de consignar en esta cuenta bancaria');

    }

  }

}

export class Consign_Current_Account_Request{
  constructor(
    public readonly number: string,
    public readonly value: number
  ) {
  }
}

export class Consign_Current_Account_Response{
  constructor(public readonly message: string){}
}