import Service from '../infra/typeorm/entities/Service';
import ICreateServiceDTO from '../dtos/ICreateServiceDTO';

export default interface IServicesRepository {
  listAll(): Promise<Service[] | undefined>;
  findById(id: string): Promise<Service | undefined>;
  create(data: ICreateServiceDTO): Promise<Service>;
  save(service: Service): Promise<Service>;
  delete(id: string): Promise<void>;
}
