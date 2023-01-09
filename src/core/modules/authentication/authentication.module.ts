import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AuthenticationLocalStrategy } from '../../strategies';
import { JwtStrategy } from 'src/core/strategies/jwt/jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({ 
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { 
        expiresIn: '24h'
      }
    })
  ],
  providers: [
    AuthenticationService,
    AuthenticationLocalStrategy,
    JwtStrategy
  ],
  exports: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }