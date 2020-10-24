import { injectable, inject } from 'tsyringe';
import IServicesRepository from '../repositories/IServicesRepository';

import Service from '../infra/typeorm/entities/Service';

interface ICategory {
  category_id: string;
}

interface IRequest {
  description: string;
  price: number;
  availability: string;
  provider_id: string;
  categories: ICategory[];
}

@injectable()
class CreateServiceService {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository,
  ) {}

  public async execute({
    description,
    price,
    availability,
    provider_id,
    categories,
  }: IRequest): Promise<Service> {
    const service = await this.servicesRepository.create({
      description,
      price,
      availability,
      provider_id,
      likes: 0,
      categories,
    });

    return service;
  }
}

export default CreateServiceService;
