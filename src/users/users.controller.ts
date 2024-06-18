import { Body, Controller, Post } from '@nestjs/common';
//import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // @Get()
  // getAllUsers(): User[] {
  //   return this.usersService.getAllUsers();
  // }
  // @Get(':id')
  // getUser(@Param('id') id: number): Promise<User> {
  //   return this.usersService.getTaskById(id);
  // }

  @Post()
  createUser(
    @Body('userName') userName: string,
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('email') email: string,
  ): Promise<User> {
    return this.usersService.createUser(userName, password, name, email);
  }
}
