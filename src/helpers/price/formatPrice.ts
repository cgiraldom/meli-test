import { ItemPrice } from '../../domain/item';

export function formatPrice(price: ItemPrice): string {
  const { amount, decimals, currency } = price;
  const fullPrice = amount + decimals / (10 * amount.toString().length);

  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(fullPrice);
}
