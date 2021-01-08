import { Module } from "@nestjs/common";
import { database_Providers } from "./Provider/data_Base.provider";
import { current_Account_Provider, saving_Account_Provider } from "./Migrations/entity_Provider";

@Module({

  providers: [

    ...database_Providers,
    ...current_Account_Provider,
    ...saving_Account_Provider

  ],
  exports:  [

    ...database_Providers,
    ...current_Account_Provider,
    ...saving_Account_Provider

  ]

})
export class Data_Base_Module {}