import { ICategoryModel } from 'src/controllers/categories/models';

export interface ICategoriesGetCategoriesRes {
  categories: Array<ICategoryModel>;
}