import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { Bank_Account } from "../../Domain/Entity/bank_Account";

@Injectable()
export abstract class Generic_Repository<T> extends MongoRepository<T>{

  public abstract map_Orm_To_Entity(orm: T): Bank_Account;

  public async find_Entity(number: string): Promise<Bank_Account>{

    const orm = await this.findOne({where: {number: number}});
    return orm == undefined ? undefined : this.map_Orm_To_Entity(orm);

  }

  public async find_All_Entities(): Promise<Bank_Account[]>{

    const accounts: Bank_Account[] = [];
    const searched_Users = await this.find();

    searched_Users.forEach(orm => accounts.push(this.map_Orm_To_Entity(orm)));

    return accounts;

  }

}