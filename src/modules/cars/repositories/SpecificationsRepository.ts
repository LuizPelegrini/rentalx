import Specification from '../models/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

class SpecficationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);
  }
}
export default SpecficationsRepository;
