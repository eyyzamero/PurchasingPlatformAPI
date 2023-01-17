import { Provider } from '@nestjs/common';
import { Category, User } from 'src/core/entities';
import { DataSource } from 'typeorm';

export const databaseRepositoriesProviders: Array<Provider> = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE']
  },
  {
    provide: 'CATEGORIES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE']
  }
];