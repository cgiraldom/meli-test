import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

import { Item, ItemDetails } from '../../domain/item';

const searchItems = async (req: Request, res: Response, next: NextFunction) => {
  const queryParam = req.query.search;

  const foundItems = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=:${queryParam}`
  );

  return res.status(200).json({ ...foundItems.data });
};

const itemControllers = { searchItems };

export default itemControllers;
