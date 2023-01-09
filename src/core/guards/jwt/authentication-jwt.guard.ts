import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { NO_AUTHENTICATION_KEY } from 'src/core/decorators';

@Injectable()
export class AuthenticationJwtGuard extends AuthGuard('authentication-jwt') {

  constructor(
    private _reflector: Reflector
  ) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const noAuthentication = this._reflector.getAllAndOverride<boolean>(NO_AUTHENTICATION_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    return noAuthentication ? true : super.canActivate(context);
  }
}