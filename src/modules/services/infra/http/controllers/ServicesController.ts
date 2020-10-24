import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAllServicesService from '@modules/services/services/ListAllServicesService';
import ShowServiceService from '@modules/services/services/ShowServiceService';
import CreateServiceService from '@modules/services/services/CreateServiceService';
import UpdateServiceService from '@modules/services/services/UpdateServiceService';
import DeleteServiceService from '@modules/services/services/DeleteServiceService';

export default class ServicesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listServices = container.resolve(ListAllServicesService);

    const services = await listServices.execute();

    return response.json(services);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { service_id } = request.params;

    const showService = container.resolve(ShowServiceService);

    const service = await showService.execute(service_id);

    return response.json(service);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { description, price, availability, categories } = request.body;

    const createService = container.resolve(CreateServiceService);

    const service = await createService.execute({
      description,
      price,
      availability,
      provider_id: user_id,
      categories,
    });

    return response.json(service);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { service_id } = request.params;
    const { description, price, availability, categories } = request.body;

    const updateService = container.resolve(UpdateServiceService);

    const service = await updateService.execute({
      service_id,
      description,
      price,
      availability,
      categories,
    });

    return response.json(service);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { service_id } = request.params;

    const deleteService = container.resolve(DeleteServiceService);

    await deleteService.execute({ service_id });

    return response.status(204).json();
  }
}
