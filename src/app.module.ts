import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { configurationLoaderFn } from './core/configuration';
import { Configuration } from './core/configuration/enums';
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
    })
  ],
  controllers: [
    AppController
  ],
  providers: [
    ConfigurationMapperService,
    ConfigService,
    DatabaseService
  ],
})
export class AppModule { }