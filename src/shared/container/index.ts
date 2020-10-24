import { container } from 'tsyringe';

import './providers';

import '@modules/users/providers/index';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokenRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import ICategoriesRepository from '@modules/categories/repositories/ICatetoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import IServicesRepository from '@modules/services/repositories/IServicesRepository';
import ServicesRepository from '@modules/services/infra/typeorm/repositories/ServicesRepository';
import ServiceCategoriesRepository from '@modules/services/infra/typeorm/repositories/ServiceCategoriesRepository';
import IServiceCategoriesRepository from '@modules/services/repositories/IServiceCategoriesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokenRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IServicesRepository>(
  'ServicesRepository',
  ServicesRepository,
);

container.registerSingleton<IServiceCategoriesRepository>(
  'ServiceCategoriesRepository',
  ServiceCategoriesRepository,
);
