import { Item, ItemDetails, Category } from '../item';

export interface ItemService {
  searchItems(query: string): Promise<SearchResult>;
  getItemById(id: string): Promise<ItemDetails>;
}

export type SearchResult = {
  categories: Array<Category>;
  items: Array<Item>;
};
