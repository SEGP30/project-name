import { Module } from '@nestjs/common';
import { Controller_Module } from "./Controller/controller.module";
import { Application_Module } from "./Application/application_Module";
import { Infrastructure_Module } from "./Infrastructure/infrastructure.module";

@Module({
  imports: [
    Application_Module,
    Controller_Module,
    Infrastructure_Module
  ],
})
export class App_Module {}
