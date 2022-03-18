import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequestDTO): void {
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export default CreateSpecificationService;
