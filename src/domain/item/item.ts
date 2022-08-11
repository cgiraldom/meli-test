export interface Item {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition: string;
  location: string;
  free_shipping: boolean;
}

export interface ItemDetails extends Item {
  sold_quantity: number;
  description: string;
}

export type ItemPrice = {
  currency: string;
  amount: number;
  decimals: number;
};
