import { ITokenPayloadModel } from '../..';

export class TokenPayloadModel implements ITokenPayloadModel {

  constructor(
    public login: string = '',
    public sub: string = ''
  ) { }
}