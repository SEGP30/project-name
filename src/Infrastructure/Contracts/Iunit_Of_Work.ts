import { Current_Account_Repository } from "../Repositories/current_Account.repository";
import { Saving_Account_Repository } from "../Repositories/saving_Account.repository";
import { Connection } from "typeorm";

export interface Iunit_Of_Work{

  current_Account_Repository: Current_Account_Repository;
  saving_Account_Repository: Saving_Account_Repository;

  start(): void;
  complete(work: () => any): Promise<any>;
  getConnection(): Connection;
  closeConnection();

}