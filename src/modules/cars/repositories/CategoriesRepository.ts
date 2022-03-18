import Category from '../models/Category';
import { ICategoriesRepository, IRequest } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
  }

  /**
   * Creates a new category
   * @param data ICreateCategoryDTO
   */
  create({ name, description }: IRequest): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export default CategoriesRepository;
