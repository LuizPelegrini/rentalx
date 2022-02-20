import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  // Dependency Inversion Principle - Service does not know how the Repository is implemented
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequestDTO): void {
    // Category name must be unique
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;
