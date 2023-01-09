import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ITokenModel, ITokenPayloadModel, TokenModel, TokenPayloadModel } from 'src/core/models';
import { IUserModel } from 'src/core/users/models';
import { UsersService } from 'src/core/users/services/users.service';

@Injectable()
export class AuthenticationService {

  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
    private _configService: ConfigService
  ) { }

  async validateUser(login: string, password: string): Promise<IUserModel | null> {
    const user = await this._usersService.getUserByLogin(login);
    return user && user.password === password ? user : null;
  }

  async getToken(user: IUserModel): Promise<ITokenModel> {
    const payload: ITokenPayloadModel = new TokenPayloadModel(user.login, user.id);
    const access_token = this._jwtService.sign({ ...payload }, { secret: this._configService.get('jwt_secret') });
    const token: ITokenModel = new TokenModel(access_token);
    return token;
  }
}