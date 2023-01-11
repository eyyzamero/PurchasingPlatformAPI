import { IConfigurationModel } from '..';

export class ConfigurationModel implements IConfigurationModel {

  constructor(
    public jwt_secret: string = '',
    public production: boolean = false,
    public version: string = ''
  ) { }
}