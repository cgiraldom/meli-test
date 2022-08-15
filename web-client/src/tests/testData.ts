import { SearchResult } from '../domain/services';
import { ItemDetails } from '../domain/item';

export const testItem: ItemDetails = {
  id: 'testId1',
  title: 'Apple Ipod touch 5g Negro Igual A Nuevo',
  price: {
    currency: 'USD',
    amount: 1000,
    decimals: 56,
  },
  picture: 'https://via.placeholder.com/680',
  condition: 'Completo Unico!',
  location: 'Mendoza',
  freeShipping: true,
  categories: [
    { id: '1', name: 'Electrónica, Audio y Video' },
    { id: '2', name: 'Reproductores' },
    { id: '3', name: '32 GB' },
  ],
  soldQuantity: 300,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const results: SearchResult = {
  author: {
    name: 'test name',
    lastname: 'test last name',
  },
  categories: [
    { id: '1', name: 'Electrónica, Audio y Video' },
    { id: '2', name: 'Reproductores' },
    { id: '3', name: '32 GB' },
  ],
  items: [
    {
      id: 'testId1',
      title: 'Apple Ipod touch 5g Negro Igual A Nuevo',
      price: {
        currency: 'USD',
        amount: 1000,
        decimals: 56,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Completo Unico!',
      location: 'Mendoza',
      freeShipping: true,
    },
    {
      id: 'testId2',
      title: 'Cafe tostado',
      price: {
        currency: 'USD',
        amount: 255,
        decimals: 23,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Completo Unico!',
      location: 'Mendoza',
      freeShipping: false,
    },
    {
      id: 'testId3',
      title: 'Mesa bonita en cartón',
      price: {
        currency: 'COP',
        amount: 1234500,
        decimals: 0,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Completo Unico!',
      location: 'Dosquebradas',
      freeShipping: false,
    },
    {
      id: 'testId4',
      title: 'Computador caro, muy caro',
      price: {
        currency: 'COP',
        amount: 12000000,
        decimals: 23,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Completo Unico!',
      location: 'Dosquebradas',
      freeShipping: true,
    },
  ],
};
