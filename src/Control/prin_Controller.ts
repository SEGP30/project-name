import { Controller, Get } from "@nestjs/common";

@Controller ('principal')
export class Prin_Controller{

  @Get()
  getRequest(){

    return 'Hello user';

  }

}
