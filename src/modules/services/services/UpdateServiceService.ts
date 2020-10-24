import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IServicesRepository from '../repositories/IServicesRepository';

import Service from '../infra/typeorm/entities/Service';
import IServiceCategoriesRepository from '../repositories/IServiceCategoriesRepository';

interface ICategory {
  category_id: string;
}

interface IRequest {
  service_id: string;
  description?: string;
  price?: number;
  availability?: string;
  categories?: ICategory[];
}

@injectable()
class UpdateServiceService {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository,

    @inject('ServiceCategoriesRepository')
    private serviceCategoryRepository: IServiceCategoriesRepository,
  ) {}

  public async execute({
    service_id,
    description,
    price,
    availability,
    categories,
  }: IRequest): Promise<Service> {
    const service = await this.servicesRepository.findById(service_id);

    if (!service) {
      throw new AppError('Service not found.');
    }

    if (categories) {
      await this.serviceCategoryRepository.deleteAll(service_id);

      const servicesCategories = categories.map(async category => {
        return this.serviceCategoryRepository.create({
          category_id: category.category_id,
          service_id,
        });
      });

      console.log(servicesCategories);
    }

    return this.servicesRepository.save({
      ...service,
      description: !description ? service.description : description,
      price: !price ? service.price : price,
      availability: !availability ? service.availability : availability,
      categories: !servicesCa,
    });
  }
}

export default UpdateServiceService;
