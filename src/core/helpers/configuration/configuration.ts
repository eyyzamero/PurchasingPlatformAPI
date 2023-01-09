import { ConfigurationMapperService } from '../../services/mapper';

export const configurationLoaderFn = () => ConfigurationMapperService.processEnvironmentToIConfigurationModel();