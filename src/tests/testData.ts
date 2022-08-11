import { SearchResult } from '../domain/services';

export const results: SearchResult = {
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
      free_shipping: true,
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
      free_shipping: false,
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
      free_shipping: false,
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
      free_shipping: true,
    },
  ],
};
