import { ICategoryModel } from '..';

export class CategoryModel implements ICategoryModel {

  constructor(
    public id: number = 0,
    public name: string = '',
    public iconName: string = ''
  ) { }
}