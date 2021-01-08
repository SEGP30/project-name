import { Module } from "@nestjs/common";
import { Register_Current_Account_Service } from "./current_Account/register_Current_Account.service";
import { Register_Saving_Account_Service } from "./saving_Account/register_Saving_Account.service";

@Module({

  imports: [

    Register_Current_Account_Service,
    Register_Saving_Account_Service

  ],
  exports: [

    Register_Current_Account_Service,
    Register_Saving_Account_Service

  ]

})

export class Application_Module{}