import { Body, Controller, Post } from "@nestjs/common";
import { Unit_Of_Work } from "../Infrastructure/Base/unit_Of_Work";
import {
  Register_Current_Account_Request,
  Register_Current_Account_Service
} from "../Application/current_Account/register_Current_Account.service";
import {
  Consign_Current_Account_Request,
  Consign_Current_Account_Service
} from "../Application/current_Account/consign_Current_Account.service";
import {
  Remove_Current_Account_Request,
  Remove_Current_Account_Service
} from "../Application/current_Account/remove_Current_Account.service";

@Controller('current_Account')
export class Current_Account_Controller{

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  @Post()
  async register_Current_Account(@Body() request: Register_Current_Account_Request) {

    const service: Register_Current_Account_Service = new Register_Current_Account_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

  @Post()
  async consing_Current_Account(@Body() request: Consign_Current_Account_Request) {

    const service: Consign_Current_Account_Service = new Consign_Current_Account_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

  @Post()
  async remove_Current_Account(@Body() request: Remove_Current_Account_Request) {

    const service: Remove_Current_Account_Service = new Remove_Current_Account_Service(this.unit_Of_Work);

    return await service.execute(request);

  }


}