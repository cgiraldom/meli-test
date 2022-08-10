import React from 'react';

import Logo from '../../assets/Logo_ML_2x.png';
import './SearchBar.scss';

export const SearchBar = (): JSX.Element => {
  return (
    <header className="search-bar-container">
      <img src={Logo} alt="logo" />
    </header>
  );
};
