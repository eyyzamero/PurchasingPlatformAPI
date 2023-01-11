import { Provider } from "@nestjs/common";
import { databaseDataSource } from "src/core/helpers";

export const databaseDataSourceProviders: Array<Provider> = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = databaseDataSource();
      return dataSource.initialize();
    }
  }
];