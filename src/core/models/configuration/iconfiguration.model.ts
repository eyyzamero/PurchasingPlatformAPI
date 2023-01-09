import * as mssql from 'mssql'

export interface IConfigurationModel {
  database: mssql.config;
  jwt_secret: string;
  production: boolean;
  version: string;
}