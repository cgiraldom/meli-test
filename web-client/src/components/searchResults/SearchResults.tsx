import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Item } from '../../domain/item';
import { ItemCard } from './item';
import './SearchResults.scss';

type SearchResultsProps = {
  foundItems: Array<Item>;
};

export const SearchResults = ({ foundItems }: SearchResultsProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="results-container">
      {foundItems.map((item, index) => {
        return (
          <ItemCard key={item.id} item={item} handleClick={() => navigate(`/items/${item.id}`)} />
        );
      })}
    </div>
  );
};
