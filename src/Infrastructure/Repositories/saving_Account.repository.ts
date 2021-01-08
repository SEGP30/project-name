import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Saving_Account_Orm } from "../Data_Base/Orm/saving_Account.orm";
import { Generic_Repository } from "../Base/generic.repository";
import { Bank_Account } from "../../Domain/Entity/bank_Account";
import { Saving_Account } from "../../Domain/Entity/saving_Account";

@Injectable()
@EntityRepository(Saving_Account_Orm)
export class Saving_AccountRepository extends Generic_Repository<Saving_Account_Orm>{

  public map_Orm_To_Entity(orm: Saving_Account_Orm): Bank_Account{

    const account: Bank_Account = new Saving_Account();

    account._id = orm._id;
    account.number = orm.number;
    account.ownerId = orm.ownerId;
    account.city = orm.city;
    account.balance = orm.balance == undefined ? 0 : orm.balance;
    account.movements = orm.movements;

    return account;

  }

}