import { ConfigurationMapperService } from '../../services/mapper';

export const configurationLoaderFn = () => ConfigurationMapperService.processEnvironmentToIConfigurationModel();
export const databaseDataSource = () => ConfigurationMapperService.processEnvironmentToDataSource();