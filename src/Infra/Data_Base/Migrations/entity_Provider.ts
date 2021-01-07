import { Connection } from "typeorm";
import { Current_AccountOrm } from "../Orm/current_Account.orm";
import { Saving_AccountOrm } from "../Orm/saving_Account.orm";

export const currentAccountProvider = [
  {
    provide: 'CURRENT_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Current_AccountOrm),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const savingAccountProvider = [
  {
    provide: 'SAVING_ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Saving_AccountOrm),
    inject: ['DATABASE_CONNECTION'],
  }
];