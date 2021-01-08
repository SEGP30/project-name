import { Module } from "@nestjs/common";
import { Data_Base_Module } from "./Data_Base/data_Base.module";
import { Unit_Of_Work } from "./Base/unit_Of_Work";

@Module({

  imports: [Data_Base_Module],
  providers: [Unit_Of_Work],
  exports: [Unit_Of_Work]

})

export class Infrastructure_Module {}