import { Injectable } from '@nestjs/common';
import { Category } from 'src/core/entities';
import { CategoriesGetCategoriesRes, ICategoriesGetCategoriesRes } from '../../contracts';
import { CategoryModel, ICategoryModel } from '../../models';

@Injectable()
export class CategoriesMapperService {

  constructor() { }

  ArrayOfCategoryEntityToArrayOfICategoryModel(src: Array<Category>): Array<ICategoryModel> {
    const dest = src.map(this.CategoryEntityToICategoryModel);
    return dest;
  }

  CategoryEntityToICategoryModel(src: Category): ICategoryModel {
    const dest = new CategoryModel(src.id, src.name, src.iconName);
    return dest;
  }

  ArrayOfICategoryModelToICategoriesGetCategoriesRes(src: Array<ICategoryModel>): ICategoriesGetCategoriesRes {
    const dest = new CategoriesGetCategoriesRes(src);
    return dest;
  }
}