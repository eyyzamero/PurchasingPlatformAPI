import { IUserModel } from '..';

export class UserModel implements IUserModel {

  constructor(
    public id: string = '',
    public login: string = '',
    public password: string = ''
  ) { }
}