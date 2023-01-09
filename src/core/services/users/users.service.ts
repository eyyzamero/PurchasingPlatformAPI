import { Injectable } from '@nestjs/common';
import { IUserModel, UserModel } from 'src/core/models';

@Injectable()
export class UsersService {
  
  private readonly _users: IUserModel[] = [
    new UserModel('1', 'john', 'doe'),
    new UserModel('2', 'iron', 'man')
  ];

  constructor() { }

  async getUserByLogin(login: string): Promise<IUserModel | undefined> {
    return this._users.find(x => x.login === login);
  }
}