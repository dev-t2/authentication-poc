import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  validateUser(username: string, password: string) {
    const user = this.usersService.findOne(username);

    if (user && user.password === password) {
      const { userId, username } = user;

      return { userId, username };
    }

    return null;
  }

  async login({ userId, username }: User) {
    return { accessToken: this.jwtService.sign({ userId, username }) };
  }
}
