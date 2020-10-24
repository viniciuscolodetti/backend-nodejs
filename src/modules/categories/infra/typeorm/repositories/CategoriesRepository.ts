import { Repository, getRepository } from 'typeorm';

import ICategoriesRepository from '@modules/categories/repositories/ICatetoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';

import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async listAll(): Promise<Category[] | undefined> {
    const categories = await this.ormRepository.find();
    return categories;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne(id);
    return category;
  }

  public async findByDescription(
    description: string,
  ): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: { description },
    });
    return category;
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = await this.ormRepository.create(data);
    await this.ormRepository.save(category);
    return category;
  }

  public async save(category: Category): Promise<Category> {
    return this.ormRepository.save(category);
  }
}

export default CategoriesRepository;
