import { Controller, Get } from "@nestjs/common";

@Controller ('principal')
export class Principal_Controller {

  @Get()
  getRequest(){

    return 'Hello user';

  }

}
