import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Current_Account_Orm } from "../Data_Base/Orm/current_Account.orm";
import { Generic_Repository } from "../Base/generic.repository";
import { Bank_Account } from "../../Domain/Entity/bank_Account";
import { Current_Account } from "../../Domain/Entity/current_Account";

@Injectable()
@EntityRepository(Current_Account_Orm)
export class Current_Account_Repository extends Generic_Repository<Current_Account_Orm>{

  public map_Orm_To_Entity(orm: Current_Account_Orm): Bank_Account{

    const account: Bank_Account = new Current_Account();

    account._id = orm._id;
    account.number = orm.number;
    account.ownerId = orm.ownerId;
    account.city = orm.city;
    account.balance = orm.balance == undefined ? 0 : orm.balance;
    account.movements = orm.movements;

    return account;

  }
}