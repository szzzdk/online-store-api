import { Controller, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //http://localhost:4345/api/user
  @Post()
  @UsePipes(new ValidationPipe()) // ValidationPipe - это встроенный класс в NestJS, который используется для валидации и трансформации данных на основе определенных правил. В данном случае, он проверит, соответствуют ли данные, пришедшие с запросом, структуре и требованиям, определенным в CreateUserDto.
  create(@Body() createUserDto: CreateUserDto) { // через @Body() говорим, что будем передавать объект и этот объект записываем в CreateUserDto по типу CreateUserDto
    return this.userService.create(createUserDto);
  }
}
