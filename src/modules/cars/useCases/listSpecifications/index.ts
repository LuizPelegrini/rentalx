import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import ListSpecificationsController from './ListSpecificationsController';
import ListSpecificationsService from './ListSpecificationsService';

// get an instance of specifications repository
const specificationsRepository = SpecificationsRepository.getInstance();

// create service to list specifications
const listSpecificationsService = new ListSpecificationsService(
  specificationsRepository
);

// create controller to handle requests coming from the router
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsService
);

export { listSpecificationsController };
