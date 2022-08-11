import { Item, ItemDetails } from '../item';

export interface ItemService {
  searchItems(query: string): Promise<SearchResult>;
  getItemById(id: string): Promise<ItemDetails>;
}

export type SearchResult = {
  categories: Array<string>;
  items: Array<Item>;
};
