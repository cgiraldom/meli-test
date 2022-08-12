import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Logo from '../../assets/Logo_ML_2x.png';
import SearchIcon from '../../assets/ic_Search@2x.png';
import './SearchBar.scss';

export const SearchBar = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('');
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (search) setValue(search);
  }, [search]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <header className="search-bar-container">
      <img src={Logo} alt="logo" />
      <input
        className="search-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        type="search"
        name="search"
        aria-label="search an item"
        placeholder="Nunca dejes de buscar"
      />
      <button
        className="search-button"
        onClick={() => navigate(`/items?search=${value}`)}
        name="search"
      >
        <img className="search-icon" src={SearchIcon} alt="search-icon" />
      </button>
    </header>
  );
};
