import { injectable, inject } from 'tsyringe';

import IServicesRepository from '../repositories/IServicesRepository';
import Service from '../infra/typeorm/entities/Service';

@injectable()
class ListAllServicesService {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository,
  ) {}

  public async execute(): Promise<Service[] | undefined> {
    const services = await this.servicesRepository.listAll();
    return services;
  }
}

export default ListAllServicesService;
