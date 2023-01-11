import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { Configuration } from './core/enums';
import { AuthenticationJwtGuard } from './core/guards';
import { configurationLoaderFn } from './core/helpers';
import { AuthenticationModule } from './core/modules/authentication/authentication.module';
import { ConfigurationMapperService } from './core/services/mapper';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/environments/${process.env.NODE_ENV as Configuration ?? Configuration.DEV}.env`,
      load: [
        configurationLoaderFn
      ]
    }),
    AuthenticationModule
  ],
  controllers: [
    AuthenticationController
  ],
  providers: [
    ConfigurationMapperService,
    ConfigService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationJwtGuard
    }
  ],
})
export class AppModule { }