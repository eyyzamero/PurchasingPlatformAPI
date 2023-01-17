import { ICategoryModel } from 'src/controllers/categories/models';
import { ICategoriesGetCategoriesRes } from '../..';

export class CategoriesGetCategoriesRes implements ICategoriesGetCategoriesRes {

  constructor(
    public categories: Array<ICategoryModel> = new Array<ICategoryModel>()
  ) { }
}