import { Body, Controller, Post, Put } from "@nestjs/common";
import { Unit_Of_Work } from "../Infrastructure/Base/unit_Of_Work";
import {
  Register_Saving_Account_Request,
  Register_Saving_Account_Service
} from "../Application/saving_Account/register_Saving_Account.service";
import {
  Consign_Saving_Account_Request,
  Consign_Saving_Account_Service
} from "../Application/saving_Account/consign_Saving_Account.service";
import {
  Remove_Saving_Account_Request,
  Remove_Saving_Account_Service
} from "../Application/saving_Account/remove_Saving_Account.service";

@Controller('saving_Account')
export class Saving_Account_Controller{

  constructor(private readonly unit_Of_Work: Unit_Of_Work) {}

  @Post()
  async register_Saving_Account(@Body() request: Register_Saving_Account_Request) {

    const service: Register_Saving_Account_Service = new Register_Saving_Account_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

  @Put('consign')
  async consign_Saving_Account(@Body() request: Consign_Saving_Account_Request) {

    const service: Consign_Saving_Account_Service = new Consign_Saving_Account_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

  @Put('remove')
  async remove_Saving_Account(@Body() request: Remove_Saving_Account_Request) {

    const service: Remove_Saving_Account_Service = new Remove_Saving_Account_Service(this.unit_Of_Work);

    return await service.execute(request);

  }

}