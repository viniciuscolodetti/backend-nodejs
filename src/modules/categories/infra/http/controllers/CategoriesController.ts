import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAllCategoriesService from '@modules/categories/services/ListAllCategoriesService';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';

export default class CategoriesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListAllCategoriesService);

    const categories = await listCategories.execute();

    return response.json(categories);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { description, icon } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({
      description,
      icon,
    });

    return response.json(category);
  }
}
