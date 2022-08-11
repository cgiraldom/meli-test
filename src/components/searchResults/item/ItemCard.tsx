import React from 'react';

import { Item, ItemPrice } from '../../../domain/item';
import FreeShippingLogo from '../../../assets/ic_shipping@2x.png';
import './ItemCard.scss';

type ItemCardProps = {
  item: Item;
  handleClick: () => void;
};

function formatPrice(price: ItemPrice) {
  const { amount, decimals, currency } = price;
  const fullPrice = amount + decimals / (10 * amount.toString().length);

  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(fullPrice);
}

export const ItemCard = ({ item, handleClick }: ItemCardProps): JSX.Element => (
  <>
    <article className="item-card-container">
      <img className="item-img" src={item.picture} alt={item.title} />
      <div className="item-info-container">
        <div className="item-info">
          <div className="first-row">
            <span className="item-price">{formatPrice(item.price)}</span>
            {item.free_shipping && <img src={FreeShippingLogo} alt="free-shipping" />}
          </div>
          <p>{item.title}</p>
          <p>{item.condition}</p>
        </div>
        <span className="item-location">{item.location}</span>
      </div>
    </article>
  </>
);
