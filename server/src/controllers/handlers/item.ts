import { Search, Item, ItemDetails } from '../../DTO/item';
import { ItemDTO, SearchDTO, CategoriesDTO, DescriptionDTO } from './types';
import { getCategories } from './categories';

export function maptoItemDetails({
  item,
  description,
  categories,
}: {
  item: ItemDTO;
  description: DescriptionDTO;
  categories: CategoriesDTO;
}): ItemDetails {
  return {
    author: {
      name: 'Carlos',
      last_name: 'Giraldo',
    },
    item: {
      id: item.id,
      title: item.title,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      price: {
        currency: item.currency_id,
        ...splitPriceAmount(item.price),
      },
      location: item.seller_address.city.name,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
      categories: categories.path_from_root,
    },
  };
}

export function mapToSearch(response: SearchDTO, category?: CategoriesDTO): Search {
  return {
    author: {
      name: 'Carlos',
      last_name: 'Giraldo',
    },
    categories: category ? category.path_from_root : [],
    items: response.results.map(mapToItem),
  };
}

function mapToItem(itemDTO: ItemDTO): Item {
  return {
    id: itemDTO.id,
    title: itemDTO.title,
    picture: itemDTO.thumbnail,
    condition: itemDTO.condition,
    location: itemDTO.seller_address.city.name,
    free_shipping: itemDTO.shipping.free_shipping,
    price: {
      currency: itemDTO.currency_id,
      ...splitPriceAmount(itemDTO.price),
    },
  };
}

function splitPriceAmount(price: number) {
  return {
    amount: Math.trunc(price),
    decimals: getDecimals(price),
  };
}

function getDecimals(num: number) {
  if (Number.isInteger(num)) {
    return 0;
  }

  const decimalStr = num.toString().split('.')[1];
  return Number(decimalStr);
}
