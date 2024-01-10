import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Collaborate } from './app.types';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async collaborate(@Body() body: Collaborate) {
    return this.appService.collaborate(body.name, body.phoneNumber, body.contactMethod);
  }
}

