import { Module } from "@nestjs/common";
import { databaseProviders } from "./Provider/data_Base.provider";
import { currentAccountProvider, savingAccountProvider } from "./Migrations/entity_Provider";

@Module({

  providers: [

    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider

  ],
  exports:  [

    ...databaseProviders,
    ...currentAccountProvider,
    ...savingAccountProvider

  ]

})
export class Data_BaseModule{}