import { Controller, Get, HttpCode } from '@nestjs/common';
import { ICategoriesGetCategoriesRes } from './contracts';
import { CategoriesMapperService } from './services/mapper/categories-mapper.service';
import { CategoriesService } from './services/ordinary/categories.service';

@Controller('categories')
export class CategoriesController {

  constructor(
    private _categoriesService: CategoriesService,
    private _categoriesMapperService: CategoriesMapperService
  ) { }

  @Get('')
  @HttpCode(200)
  async getCategories(): Promise<ICategoriesGetCategoriesRes>  {
    const serviceRes = await this._categoriesService.getAll();
    const res = this._categoriesMapperService.ArrayOfICategoryModelToICategoriesGetCategoriesRes(serviceRes);
    return res;
  }
}