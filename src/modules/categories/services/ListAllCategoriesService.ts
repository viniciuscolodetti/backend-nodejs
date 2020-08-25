import { injectable, inject } from 'tsyringe';

import ICategoriesRepository from '../repositories/ICatetoriesRepository';
import Category from '../infra/typeorm/entities/Category';

@injectable()
class ListAllCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Category[] | undefined> {
    const categories = await this.categoriesRepository.listAll();
    return categories;
  }
}

export default ListAllCategoriesService;
