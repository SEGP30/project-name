import { Current_AccountRepository } from "../Repositories/current_Account.repository";
import { Saving_AccountRepository } from "../Repositories/saving_Account.repository";
import { Connection } from "typeorm";

export interface Iunit_Of_Work{

  current_Account_Repository: Current_AccountRepository;
  saving_Account_Repository: Saving_AccountRepository;

  start(): void;
  complete(work: () => any): Promise<any>;
  getConnection(): Connection;
  closeConnection();

}