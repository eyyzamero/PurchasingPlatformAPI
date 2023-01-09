import { TokenModel } from 'src/core/models';
import { IAuthenticationLoginRes } from '../..';

export class AuthenticationLoginRes extends TokenModel implements IAuthenticationLoginRes {

  constructor(
    access_token: string = ''
  ) {
    super(access_token)
  }
}