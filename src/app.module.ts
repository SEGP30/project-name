import { Module } from '@nestjs/common';

import { Control_Module } from "./Control/control_Module";

@Module({
  imports: [
    Control_Module
  ],
})
export class AppModule {}
