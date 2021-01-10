import { Module } from "@nestjs/common";
import { Register_Current_Account_Service } from "./current_Account/register_Current_Account.service";
import { Register_Saving_Account_Service } from "./saving_Account/register_Saving_Account.service";
import { Consign_Current_Account_Service } from "./current_Account/consign_Current_Account.service";
import { Consign_Saving_Account_Service } from "./saving_Account/consign_Saving_Account.service";
import { Remove_Current_Account_Service } from "./current_Account/remove_Current_Account.service";
import { Remove_Saving_Account_Service } from "./saving_Account/remove_Saving_Account.service";

@Module({

  imports: [

    Register_Current_Account_Service,
    Register_Saving_Account_Service,
    Consign_Current_Account_Service,
    Consign_Saving_Account_Service,
    Remove_Current_Account_Service,
    Remove_Saving_Account_Service

  ],
  exports: [

    Register_Current_Account_Service,
    Register_Saving_Account_Service,
    Consign_Current_Account_Service,
    Consign_Saving_Account_Service,
    Remove_Current_Account_Service,
    Remove_Saving_Account_Service

  ]

})

export class Application_Module{}