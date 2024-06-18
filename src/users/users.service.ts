import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  // async getTaskById(id: number): Promise<User> {
  //   const result = await this.userRepository.findOne(id);
  //   if (!result) {
  //     throw new NotFoundException(`User ${id} Not Found`);
  //   }
  //   return result;
  // }
  // getAllUsers(): User[] {
  //   return this.users;
  // }
  async createUser(
    userName: string,
    password: string,
    name: string,
    email: string,
  ) {
    const user = new User();
    user.userName = userName;
    user.password = password;
    user.name = name;
    user.email = email;
    await user.save();
    return user;
  }
}
