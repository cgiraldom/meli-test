import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';

import { Search, ItemDetails } from '../DTO/item';
import { mapToSearch, maptoItemDetails } from './handlers/item';
import { getCategories } from './handlers/categories';
import { SearchDTO, ItemDTO, CategoriesDTO, DescriptionDTO } from './handlers/types';
import { AppError, HttpCode } from '../exceptions/appError';

async function searchItems(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<Search>> {
  const queryParam = req.query.search;

  const foundItems = await axios
    .get<SearchDTO>(`https://api.mercadolibre.com/sites/MLA/search?q=:${queryParam}`)
    .then(res => res.data);

  if (foundItems.results.length === 0) {
    throw new AppError({
      httpCode: HttpCode.NOT_FOUND,
      description: 'No items match your query',
    });
  }
  const categories = await getCategories(foundItems);
  const search = mapToSearch(foundItems, categories);

  return res.status(200).json(search);
}

async function getItem(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<ItemDetails>> {
  const id = req.params.id;

  const fetchItem = axios
    .get<ItemDTO>(`https://api.mercadolibre.com/items/${id}`)
    .then(res => res.data);

  const fetchDescription = axios
    .get<DescriptionDTO>(`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.data);

  const [item, description] = await Promise.all([fetchItem, fetchDescription]);

  const categories = await axios
    .get<CategoriesDTO>(`https://api.mercadolibre.com/categories/${item.category_id}`)
    .then(res => res.data);

  return res.status(200).json(maptoItemDetails({ item, description, categories }));
}

const itemControllers = { searchItems, getItem };

export default itemControllers;
