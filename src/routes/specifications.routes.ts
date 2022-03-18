import { Router } from 'express';

import SpecficationsRepository from '../modules/cars/repositories/SpecificationsRepository';
import CreateSpecificationService from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();
const specificationsRepository = new SpecficationsRepository();

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRouter };
