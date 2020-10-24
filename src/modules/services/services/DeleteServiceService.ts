import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IServicesRepository from '../repositories/IServicesRepository';

interface IRequest {
  service_id: string;
}

@injectable()
class DeleteServiceService {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository,
  ) {}

  public async execute({ service_id }: IRequest): Promise<void> {
    const service = await this.servicesRepository.findById(service_id);

    if (!service) {
      throw new AppError('Service not found.');
    }

    await this.servicesRepository.delete(service_id);
  }
}

export default DeleteServiceService;
