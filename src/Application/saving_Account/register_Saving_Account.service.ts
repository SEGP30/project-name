import { Unit_Of_Work } from "../../Infrastructure/Base/unit_Of_Work";
import { Bank_Account } from "../../Domain/Entity/bank_Account";
import { Transaction } from "../../Domain/Entity/transaction";
import { Saving_Account } from "../../Domain/Entity/saving_Account";
import { Saving_Account_Repository } from "../../Infrastructure/Repositories/saving_Account.repository";

export class Register_Saving_Account_Service {

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  async execute(request: Register_Saving_Account_Request): Promise<Register_Saving_Account_Response>{

    try{

      const account_Searched: Bank_Account = await this.unit_Of_Work.saving_Account_Repository.find_Entity(request.number);

      if(account_Searched == undefined){

        const new_Account: Bank_Account = new Saving_Account();

        new_Account.number = request.number;
        new_Account.ownerId = request.owner_ID;
        new_Account.city = request.city;

        const first_Transaction: Transaction = new Transaction();

        first_Transaction.value = parseInt(request.first_Consign_Value.toString());
        first_Transaction.city = request.city;

        new_Account.consign(first_Transaction);

        if(new_Account.balance > 0){

          await this.unit_Of_Work.start();
          const saved_Account = await this.unit_Of_Work.saving_Account_Repository.save(Saving_Account_Repository.map_Entity_To_Orm(new_Account));

          if(saved_Account != undefined){

            return new Register_Saving_Account_Response(`Cuenta ahorro número ${saved_Account.number} ha sido creada satisfactoriamente`);

          }

        }

        return new Register_Saving_Account_Response('Consignación inicial insuficiente. La consignación inicial mínima es de $50000 COP');

      }

      return new Register_Saving_Account_Response('Esta cuenta bancaria ya se encuentra registrada');

    } catch(e){

      return new Register_Saving_Account_Response('Se ha presentado un error al momento de registrar esta cuenta bancaria');

    }

  }

}

export class Register_Saving_Account_Request {

  constructor(
    public readonly number: string,
    public readonly owner_ID: string,
    public readonly city: string,
    public readonly first_Consign_Value: number
  ) {
  }

}

export class Register_Saving_Account_Response {
  constructor(public readonly message: string){}
}