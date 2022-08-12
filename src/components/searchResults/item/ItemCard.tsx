import React from 'react';

import { Item } from '../../../domain/item';
import FreeShippingLogo from '../../../assets/ic_shipping@2x.png';
import { formatPrice } from '../../../helpers/price';
import './ItemCard.scss';

type ItemCardProps = {
  item: Item;
  handleClick: () => void;
};

export const ItemCard = ({ item, handleClick }: ItemCardProps): JSX.Element => (
  <>
    <article onClick={handleClick} className="item-card-container">
      <img className="item-img" src={item.picture} alt={item.title} />
      <div className="item-info-container">
        <div className="item-info">
          <div className="first-row">
            <span className="item-price">{formatPrice(item.price)}</span>
            {item.freeShipping && <img src={FreeShippingLogo} alt="free-shipping" />}
          </div>
          <p>{item.title}</p>
          <p>{item.condition}</p>
        </div>
        <span className="item-location">{item.location}</span>
      </div>
    </article>
  </>
);
