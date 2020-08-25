import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICategoriesRepository from '../repositories/ICatetoriesRepository';
import Category from '../infra/typeorm/entities/Category';

interface IRequest {
  description: string;
  icon: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ description, icon }: IRequest): Promise<Category> {
    const checkCategoryExists = await this.categoriesRepository.findByDescription(
      description,
    );

    if (checkCategoryExists) {
      throw new AppError('Category already registered.');
    }

    const category = await this.categoriesRepository.create({
      description,
      icon,
    });

    return category;
  }
}

export default CreateCategoryService;
