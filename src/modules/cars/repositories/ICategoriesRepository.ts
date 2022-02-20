import Category from '../models/Category';

interface IRequest {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: IRequest): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, IRequest };
