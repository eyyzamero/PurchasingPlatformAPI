import * as mssql from 'mssql'

export interface IConfigurationModel {
  database: mssql.config;
  production: boolean;
  version: string;
}