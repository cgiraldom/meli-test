import axios from 'axios';

import { ItemService } from '../../domain/services';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const itemService: ItemService = {
  searchItems(query: string) {
    return api.get(`/items?search=${query}`);
  },
  getItemById(id: string) {
    return api.get(`/items:${id}`);
  },
};
