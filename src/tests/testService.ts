import { ItemDetails } from '../domain/item';
import { ItemService } from '../domain/services';
import { results } from './testData';

export const testService: ItemService = {
  searchItems() {
    return new Promise(resolve => resolve(results));
  },
  getItemById() {
    return new Promise(resolve => resolve({} as ItemDetails));
  },
};
