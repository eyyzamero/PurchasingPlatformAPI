import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/core/entities';
import { Repository } from 'typeorm';
import { ICategoryModel } from '../../models';
import { CategoriesMapperService } from '../mapper/categories-mapper.service';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject('CATEGORIES_REPOSITORY') private _categoriesRepository: Repository<Category>,
    private _categoriesMapperService: CategoriesMapperService
  ) { }

  async getAll(): Promise<Array<ICategoryModel>> {
    const categories = await this._categoriesRepository.find();
    const mappedCategories = this._categoriesMapperService.ArrayOfCategoryEntityToArrayOfICategoryModel(categories);
    return mappedCategories;
  }
}