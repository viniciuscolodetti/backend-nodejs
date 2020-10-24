import ServiceCategories from '../infra/typeorm/entities/ServiceCategories';
import ICreateServiceCategoryDTO from '../dtos/ICreateServiceCategoryDTO';

export default interface IServiceCategoriesRepository {
  findByServiceId(service_id: string): Promise<ServiceCategories[] | undefined>;
  create(data: ICreateServiceCategoryDTO): Promise<ServiceCategories>;
  deleteAll(service_id: string): Promise<void>;
}
