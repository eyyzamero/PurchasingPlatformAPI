import { Injectable } from '@nestjs/common';
import * as mssql from 'mssql';
import { ConfigurationModel, IConfigurationModel } from 'src/core/models';

@Injectable()
export class ConfigurationMapperService {

  constructor() { }

  static processEnvironmentToIConfigurationModel(): IConfigurationModel {
    const dest = new ConfigurationModel(
      this._processEnvironmentToMssqlConfig(),
      process.env.JWT_SECRET,
      Boolean(process.env.PRODUCTION),
      process.env.VERSION
    );
    return dest;
  }

  private static _processEnvironmentToMssqlConfig(): mssql.config {
    const dest: mssql.config = {
      server: process.env.DB_SERVER,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_USER_PASSWORD,
      options: {
        trustServerCertificate: Boolean(process.env.DB_TRUST_SERVER_CERTIFICATE)
      }
    }
    return dest;
  }
}