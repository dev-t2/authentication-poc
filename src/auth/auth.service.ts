import { Injectable } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateUser(username: string, password: string) {
    const user = this.usersService.findOne(username);

    if (user && user.password === password) {
      const { userId, username } = user;

      return { userId, username };
    }

    return null;
  }
}
