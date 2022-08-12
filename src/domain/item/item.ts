export interface Item {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition: string;
  location: string;
  freeShipping: boolean;
}

export interface ItemDetails extends Item {
  categories: Array<Category>;
  soldQuantity: number;
  description: string;
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
