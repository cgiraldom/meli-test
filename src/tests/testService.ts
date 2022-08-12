import { ItemService } from '../domain/services';
import { results, testItem } from './testData';

export const testService: ItemService = {
  searchItems() {
    return new Promise(resolve => resolve(results));
  },
  getItemById() {
    return new Promise(resolve => resolve(testItem));
  },
};
