import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ITokenPayloadModel, TokenPayloadModel } from 'src/core/models';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'authentication-jwt') {
  
  constructor(
    configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt_secret')
    });
  }

  async validate(payload: ITokenPayloadModel): Promise<ITokenPayloadModel> {
    const tokenPayload = new TokenPayloadModel(payload.login, payload.sub);
    return tokenPayload;
  }
}