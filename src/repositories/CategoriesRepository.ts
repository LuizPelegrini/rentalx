/**
 * Repository to manipulate Category data
 */

import Category from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
  }

  /**
   * Creates a new category
   * @param data ICreateCategoryDTO
   */
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export default CategoriesRepository;
