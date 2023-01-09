import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IUserModel } from 'src/core/models';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class AuthenticationLocalStrategy extends PassportStrategy(Strategy, 'authentication-local') {

  constructor(
    private _authService: AuthenticationService
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<IUserModel> {
    const user = await this._authService.validateUser(username, password);

    if (!user)
      throw new UnauthorizedException();
    return user;
  }
}