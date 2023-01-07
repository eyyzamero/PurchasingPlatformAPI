import { Injectable } from "@nestjs/common";
import { ConfigurationModel, IConfigurationModel } from "src/core/configuration/models";
import * as mssql from 'mssql';

@Injectable()
export class ConfigurationMapperService {

  constructor() { }

  static processEnvironmentToIConfigurationModel(): IConfigurationModel {
    const dest = new ConfigurationModel(
      this._processEnvironmentToMssqlConfig(),
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