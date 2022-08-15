import { Category } from '../../DTO/item';
import { SearchDTO } from './types';

export function getCategories(search: SearchDTO): Array<Category> {
  const categoryFilter = [...search.filters, ...search.available_filters].filter(
    filter => filter.id === 'category'
  );

  return categoryFilter;
}
