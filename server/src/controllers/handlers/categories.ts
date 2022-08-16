import axios, { AxiosResponse } from 'axios';

import { Category } from '../../DTO/item';
import { SearchDTO, CategoriesDTO, Filter, AvailableFilter } from './types';

export async function getCategories(search: SearchDTO): Promise<CategoriesDTO | undefined> {
  const appliedFilter = search.filters.find(filter => filter.id === 'category');

  if (appliedFilter) {
    return appliedFilter.values[0];
  }

  const availableFilter = search.available_filters.find(filter => filter.id === 'category');

  if (true) {
    const sortedFilters = availableFilter?.values.sort((a, b) => b.results - a.results);
    const [firstCategory] = sortedFilters || [];

    return await axios
      .get<CategoriesDTO>(`https://api.mercadolibre.com/categories/${firstCategory.id}`)
      .then(res => res.data);
  }

  return undefined;
}
