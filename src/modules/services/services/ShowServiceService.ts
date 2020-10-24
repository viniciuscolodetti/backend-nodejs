import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IServicesRepository from '../repositories/IServicesRepository';
import Service from '../infra/typeorm/entities/Service';

@injectable()
class ShowServiceService {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository,
  ) {}

  public async execute(id: string): Promise<Service> {
    const service = await this.servicesRepository.findById(id);

    if (!service) {
      throw new AppError('Service not found.');
    }

    return service;
  }
}

export default ShowServiceService;
