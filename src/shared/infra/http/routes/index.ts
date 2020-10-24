import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';

import servicesRouter from '@modules/services/infra/http/routes/services.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/password', passwordRouter);

routes.use('/categories', categoriesRouter);

routes.use('/services', servicesRouter);

export default routes;
