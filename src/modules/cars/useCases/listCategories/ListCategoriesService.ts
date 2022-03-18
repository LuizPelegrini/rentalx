import Category from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export default ListCategoriesService;
