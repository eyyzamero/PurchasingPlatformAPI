import { Injectable } from '@nestjs/common';
import { ConfigurationModel, IConfigurationModel } from 'src/core/models';
import { DataSource } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

@Injectable()
export class ConfigurationMapperService {

  constructor() { }

  static processEnvironmentToIConfigurationModel(): IConfigurationModel {
    const dest = new ConfigurationModel(
      process.env.JWT_SECRET,
      Boolean(process.env.PRODUCTION),
      process.env.VERSION
    );
    return dest;
  }

  static processEnvironmentToDataSource(): DataSource {
    const options: SqlServerConnectionOptions = {
      type: 'mssql',
      host: process.env.DB_SERVER,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_USER_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        __dirname + '/../../../entities/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      options: {
        encrypt: false
      }
    }
    const dest = new DataSource(options);
    return dest;
  }
}