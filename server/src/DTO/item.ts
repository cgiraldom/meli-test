export interface Search {
  author: Author;
  categories: Array<Category>;
  items: Array<Item>;
};

export type Author = {
  name: string;
  last_name: string;
};

export interface Item {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition: string;
  location: string;
  free_shipping: boolean;
}

export interface ItemDetails {
  author: Author;
  item: Item &
    {
      categories: Array<Category>;
      sold_quantity: number;
      description: string;
    }
}

export type ItemPrice = {
  currency: string;
  amount: number;
  decimals: number;
};
export type Category = {
  id: string;
  name: string;
};
