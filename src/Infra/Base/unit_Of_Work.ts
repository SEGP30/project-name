import { Iunit_Of_Work } from "../Contracts/Iunit_Of_Work";
import { Current_AccountRepository } from "../Repositories/current_Account.repository";
import { Saving_AccountRepository } from "../Repositories/saving_Account.repository";
import { Connection, EntityManager, QueryRunner } from "typeorm";
import { Inject } from "@nestjs/common";

export class Unit_Of_Work implements Iunit_Of_Work{

  private readonly query_Runner: QueryRunner;
  private transaction_Manager: EntityManager;

  current_Account_Repository: Current_AccountRepository;
  saving_Account_Repository: Saving_AccountRepository;

  constructor(@Inject('DATABASE_CONNECTION') private readonly async_Database_Connection: Connection) {

    this.query_Runner = this.async_Database_Connection.createQueryRunner();

    this.current_Account_Repository = this.async_Database_Connection.getCustomRepository(Current_AccountRepository);
    this.saving_Account_Repository = this.async_Database_Connection.getCustomRepository(Saving_AccountRepository);

  }

  async start() {

    await this.query_Runner.startTransaction();
    this.setTransactionManager();

  }

  private setTransactionManager(){

    this.transaction_Manager = this.query_Runner.manager;

  }

  async complete(work: () => any): Promise<any> {
    try{

      const response = await work();
      await this.query_Runner.commitTransaction();
      return response;

    } catch (e) {

      await this.query_Runner.rollbackTransaction();
      return e.toString();
      
    } finally {

      await this.query_Runner.release();

    }
  }

  getConnection(): Connection {
    return this.async_Database_Connection;
  }

  async closeConnection() {

    await this.async_Database_Connection.close();
    await this.query_Runner.manager.connection.close();

  }

}