import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from '../../users/users.module';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AuthenticationLocalStrategy } from '../../strategies';
import { JwtStrategy } from 'src/core/strategies/jwt/jwt.strategy';

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