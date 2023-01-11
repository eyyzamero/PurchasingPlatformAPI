import { Module } from "@nestjs/common";
import { databaseDataSourceProviders, databaseRepositoriesProviders } from "src/core/providers/database";
import { EntitiesMapperService } from "src/core/services/mapper/entities/entities-mapper.service";

@Module({
  providers: [
    EntitiesMapperService,
    ...databaseDataSourceProviders,
    ...databaseRepositoriesProviders
  ],
  exports: [
    EntitiesMapperService,
    ...databaseDataSourceProviders,
    ...databaseRepositoriesProviders
  ]
})
export class DatabaseModule { }