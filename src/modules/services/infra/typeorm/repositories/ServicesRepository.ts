import { Repository, getRepository } from 'typeorm';

import IServicesRepository from '@modules/services/repositories/IServicesRepository';
import ICreateServiceDTO from '@modules/services/dtos/ICreateServiceDTO';

import Service from '../entities/Service';

class ServicesRepository implements IServicesRepository {
  private ormRepository: Repository<Service>;

  constructor() {
    this.ormRepository = getRepository(Service);
  }

  public async listAll(): Promise<Service[] | undefined> {
    const services = await this.ormRepository.find();
    return services;
  }

  public async findById(id: string): Promise<Service | undefined> {
    const service = await this.ormRepository.findOne(id);
    return service;
  }

  public async create(data: ICreateServiceDTO): Promise<Service> {
    const service = this.ormRepository.create(data);
    await this.ormRepository.save(service);
    return service;
  }

  public async save(service: Service): Promise<Service> {
    return this.ormRepository.save(service);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ServicesRepository;
