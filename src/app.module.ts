import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { Configuration } from './core/enums';
import { AuthenticationJwtGuard } from './core/guards';
import { configurationLoaderFn } from './core/helpers';
import { AuthenticationModule } from './core/modules';
import { DatabaseService } from './core/services/database/database.service';
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
    AppController,
    AuthenticationController
  ],
  providers: [
    ConfigurationMapperService,
    ConfigService,
    DatabaseService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationJwtGuard
    }
  ],
})
export class AppModule { }