import { IConfigurationModel } from ".";
import * as mssql from 'mssql';

export class ConfigurationModel implements IConfigurationModel {

  constructor(
    public database: mssql.config,
    public production: boolean = false,
    public version: string = ''
  ) { }
}