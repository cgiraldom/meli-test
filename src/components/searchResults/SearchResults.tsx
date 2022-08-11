import React from 'react';

import { ItemCard } from './item';
import { testItem } from './item/__test__/testData';
import './SearchResults.scss';

export const SearchResults = (): JSX.Element => (
  <div className="results-container">
    <ItemCard item={testItem} handleClick={() => {}} />
    <ItemCard item={testItem} handleClick={() => {}} />
    <ItemCard item={testItem} handleClick={() => {}} />
    <ItemCard item={testItem} handleClick={() => {}} />
  </div>
);
