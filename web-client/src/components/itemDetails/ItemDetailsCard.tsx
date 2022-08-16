import React from 'react';

import { ItemDetails } from '../../domain/item';
import { formatPrice } from '../../helpers/price';
import './ItemDetailsCard.scss';

type ItemDetailsProps = {
  item: ItemDetails;
};

export const ItemDetailsCard = ({ item }: ItemDetailsProps): JSX.Element => {
  return (
    <div className="item-details-container">
      <img className="item-image" src={item.picture} alt="item" />
      <section className="item-info">
        <span className="item-condition">{`${item.condition} - ${item.soldQuantity} vendidos`}</span>
        <span className="item-title">{item.title}</span>
        <span className="item-price">{formatPrice(item.price)}</span>
        <button>Comprar</button>
      </section>
      {item.description && (
        <section className="item-description">
          <h3>Descripción del producto</h3>
          <p>{item.description}</p>
        </section>
      )}
    </div>
  );
};
