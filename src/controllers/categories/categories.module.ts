import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/modules';
import { CategoriesController } from './categories.controller';
import { CategoriesMapperService } from './services/mapper/categories-mapper.service';
import { CategoriesService } from './services/ordinary/categories.service';

@Module({ 
  imports: [
    forwardRef(() => DatabaseModule)
  ],
  controllers: [
    CategoriesController
  ],
  providers: [
    CategoriesMapperService,
    CategoriesService
  ]
})
export class CategoriesModule { }