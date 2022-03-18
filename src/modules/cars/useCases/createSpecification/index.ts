import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import CreateSpecificationController from './CreateSpecificationController';
import CreateSpecificationService from './CreateSpecificationService';

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpeficationService = new CreateSpecificationService(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpeficationService
);

export { createSpecificationController };
