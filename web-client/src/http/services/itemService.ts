import axios from 'axios';

import { ItemService, SearchResult, ItemResult } from '../../domain/services';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const itemService: ItemService = {
  searchItems(query: string) {
    return api.get<SearchResult>(`/api/items?search=${query}`).then(res => res.data);
  },
  getItemById(id: string) {
    return api.get<ItemResult>(`/api/items/${id}`).then(res => res.data);
  },
};
