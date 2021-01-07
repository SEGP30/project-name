import { Module } from "@nestjs/common";
import { Data_BaseModule } from "./Data_Base/data_Base.module";
import { Unit_Of_Work } from "./Base/unit_Of_Work";

@Module({

  imports: [Data_BaseModule],
  providers: [Unit_Of_Work],
  exports: [Unit_Of_Work]

})

export class InfrastructureModule{}