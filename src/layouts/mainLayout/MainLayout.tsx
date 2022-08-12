import React from 'react';

import { SearchBar } from '../../components';
import './MainLayout.scss';

export const MainLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <SearchBar />
      <main className="main-container">{children}</main>
    </>
  );
};
