/**
 * Router for Category
 */

import { Router } from 'express';

import CategoriesRepository from '../modules/cars/repositories/CategoriesRepository';
import CreateCategoryService from '../modules/cars/services/CreateCategoryService';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  // Dependency Inversion Principle
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRouter };
