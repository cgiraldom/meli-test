import { Item, ItemDetails, Category } from '../item';

export interface ItemService {
  searchItems(query: string): Promise<SearchResult>;
  getItemById(id: string): Promise<ItemResult>;
}

export type SearchResult = {
  author: {
    name: string;
    lastname: string;
  };
  categories: Array<Category>;
  items: Array<Item>;
};

export type ItemResult = {
  author: {
    name: string;
    lastname: string;
  };
  item: ItemDetails;
};
