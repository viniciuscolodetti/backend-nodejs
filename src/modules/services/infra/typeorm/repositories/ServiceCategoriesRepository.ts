import { Repository, getRepository } from 'typeorm';

import IServiceCategoriesRepository from '@modules/services/repositories/IServiceCategoriesRepository';
import ICreateServiceCategoryDTO from '@modules/services/dtos/ICreateServiceCategoryDTO';

import ServiceCategories from '../entities/ServiceCategories';

class ServiceCategoriesRepository implements IServiceCategoriesRepository {
  private ormRepository: Repository<ServiceCategories>;

  constructor() {
    this.ormRepository = getRepository(ServiceCategories);
  }

  public async findByServiceId(
    service_id: string,
  ): Promise<ServiceCategories[] | undefined> {
    const categories = await this.ormRepository.find({
      where: {
        service_id,
      },
    });
    return categories;
  }

  public async create(
    data: ICreateServiceCategoryDTO,
  ): Promise<ServiceCategories> {
    const category = this.ormRepository.create(data);
    await this.ormRepository.save(category);
    return category;
  }

  public async deleteAll(service_id: string): Promise<void> {
    await this.ormRepository.delete({ service_id });
  }
}

export default ServiceCategoriesRepository;
