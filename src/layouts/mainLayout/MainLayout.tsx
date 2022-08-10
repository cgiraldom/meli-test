import React from 'react';

import { SearchBar } from '../../components';

export const MainLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
};
