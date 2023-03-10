import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { NoAuthentication } from 'src/core/decorators';
import { AuthenticationLocalGuard } from 'src/core/guards';
import { IUserModel } from 'src/core/models';
import { AuthenticationService } from 'src/core/services/authentication/authentication.service';
import { IAuthenticationLoginReq, IAuthenticationLoginRes } from './contracts';

@Controller('authentication')
export class AuthenticationController {
  
  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  @NoAuthentication()
  @UseGuards(AuthenticationLocalGuard)
  @Post('login')
  @HttpCode(200)
  async login(@Request() req: IAuthenticationLoginReq): Promise<IAuthenticationLoginRes> {
    const res = this._authenticationService.getToken(req.user);
    return res;
  }

  @Get('check')
  check(@Request() req: any): IUserModel {
    return req.user;
  }
}