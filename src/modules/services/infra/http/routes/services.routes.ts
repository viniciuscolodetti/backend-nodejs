import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ServicesController from '../controllers/ServicesController';

const servicesRouter = Router();
const servicesController = new ServicesController();

servicesRouter.use(ensureAuthenticated);

servicesRouter.get('/', servicesController.index);

servicesRouter.get('/:service_id', servicesController.show);

servicesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      price: Joi.number().required(),
      availability: Joi.string().required(),
      categories: Joi.array()
        .items(
          Joi.object({
            category_id: Joi.string().required(),
          }),
        )
        .required(),
    },
  }),
  servicesController.create,
);

servicesRouter.put('/:service_id', servicesController.update);

servicesRouter.delete('/:service_id', servicesController.delete);

export default servicesRouter;
