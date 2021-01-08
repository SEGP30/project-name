import { Module } from "@nestjs/common";
import { Infrastructure_Module } from "../Infrastructure/infrastructure.module";
import { Application_Module } from "../Application/application_Module";
import { Current_Account_Controller } from "./current_Account.controller";
import { Saving_Account_Controller } from "./saving_Account.controller";

@Module({

  imports: [

    Infrastructure_Module,
    Application_Module

  ],
  controllers: [

    Current_Account_Controller,
    Saving_Account_Controller

  ]
})

export class Controller_Module {}