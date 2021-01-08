import { Connection } from "typeorm";
import { Current_Account_Orm } from "../Orm/current_Account.orm";
import { Saving_Account_Orm } from "../Orm/saving_Account.orm";

export const current_Account_Provider = [
  {
    provide: 'CURRENT_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Current_Account_Orm),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const saving_Account_Provider = [
  {
    provide: 'SAVING_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Saving_Account_Orm),
    inject: ['DATABASE_CONNECTION'],
  }
];