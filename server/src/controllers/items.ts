import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';

import { mapToSearch, maptoItemDetails } from './handlers/item';

async function searchItems(req: Request, res: Response, next: NextFunction) {
  const queryParam = req.query.search;

  const foundItems = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=:${queryParam}`
  ).then(res => res.data);

  return res.status(200).json(mapToSearch(foundItems));
};

async function getItem(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  const fetchItem = axios.get(
    `https://api.mercadolibre.com/items/${id}`
  ).then(res => res.data);

  const fetchDescription = axios.get(
    `https://api.mercadolibre.com/items/${id}/description`
  ).then(res => res.data);

  const [item, description] = await Promise.all([fetchItem, fetchDescription]);

  const categories = await axios.get(
    `https://api.mercadolibre.com/categories/${item.category_id}`
  ).then(res => res.data);

  return res.status(200).json(maptoItemDetails({ item, description, categories }));
};

const itemControllers = { searchItems, getItem };

export default itemControllers;
