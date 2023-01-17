import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AuthenticationLocalStrategy } from '../../strategies';
import { JwtStrategy } from 'src/core/strategies/jwt/jwt.strategy';
import { UsersModule } from 'src/controllers/users/users.module';
import { UsersService } from 'src/controllers/users/services/users.service';
import { DatabaseModule } from '../database/database.module';

@Module({ 
  imports: [
    forwardRef(() => DatabaseModule),
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
    UsersService,
    AuthenticationService,
    AuthenticationLocalStrategy,
    JwtStrategy
  ],
  exports: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }