import { ITokenModel } from '../..';

export class TokenModel implements ITokenModel {

  constructor(
    public access_token: string = ''
  ) { }
}