import React from 'react';

import { Item } from '../../domain/item';
import { ItemCard } from './item';
import './SearchResults.scss';

type SearchResultsProps = {
  foundItems: Array<Item>;
};

export const SearchResults = ({ foundItems }: SearchResultsProps): JSX.Element => (
  <div className="results-container">
    {foundItems.map(item => {
      return <ItemCard key={item.id} item={item} handleClick={() => {}} />;
    })}
  </div>
);
