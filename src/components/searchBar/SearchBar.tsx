import React from 'react';

import Logo from '../../assets/Logo_ML_2x.png';
import SearchIcon from '../../assets/ic_Search@2x.png';
import './SearchBar.scss';

export const SearchBar = (): JSX.Element => {
  return (
    <header className="search-bar-container">
      <img src={Logo} alt="logo" />
      <input className="search-input" type="search" placeholder="Nunca dejes de buscar" />
      <button className="search-button" name="search">
        <img className="search-icon" src={SearchIcon} alt="search-icon" />
      </button>
    </header>
  );
};
