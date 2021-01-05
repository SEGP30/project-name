import { Module } from "@nestjs/common";
import { Prin_Controller } from "./prin_Controller";

@Module({
  controllers: [
    Prin_Controller
  ]
})

export class Control_Module{}