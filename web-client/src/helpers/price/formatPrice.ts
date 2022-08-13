import { ItemPrice } from '../../domain/item';

export function formatPrice(price: ItemPrice): string {
  const { amount, decimals, currency } = price;
  const fullPrice = amount + decimals / (10 * amount.toString().length);
  const userLocale =
    navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

  return new Intl.NumberFormat(userLocale, { style: 'currency', currency }).format(fullPrice);
}
