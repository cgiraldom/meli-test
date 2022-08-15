export type SearchDTO = {
  results: Array<ItemDTO>;
  filters: Array<Filter<AppliedFilter>>;
  available_filters: Array<Filter<AvailableFilter>>;
};

export type ItemDTO = {
  id: string;
  category_id: string;
  title: string;
  price: number;
  currency_id: string;
  seller_address: AddressDTO;
  shipping: ShippingDTO;
  condition: string;
  thumbnail: string;
  sold_quantity: number;
};

export type Filter<T> = {
  id: string;
  name: string;
  values: Array<T>;
};

type AppliedFilter = {
  id: string;
  name: string;
  path_from_root: Array<{
    id: string;
    name: string;
  }>;
};

export type AvailableFilter = {
  id: string;
  name: string;
  results: number;
};

type AddressDTO = {
  id: string;
  city: {
    name: string;
  };
};

type ShippingDTO = {
  free_shipping: boolean;
};

export type CategoriesDTO = {
  id: string;
  name: string;
};

export type DescriptionDTO = {
  text: string;
};
