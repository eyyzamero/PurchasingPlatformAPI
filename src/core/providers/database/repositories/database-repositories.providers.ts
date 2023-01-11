import { Provider } from "@nestjs/common";
import { User } from "src/core/entities";
import { DataSource } from "typeorm";

export const databaseRepositoriesProviders: Array<Provider> = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE']
  }
];