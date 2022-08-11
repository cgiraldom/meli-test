import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts';
import { SearchResults } from './components/searchResults';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <></>
            </MainLayout>
          }
        />
        <Route
          path="items"
          element={
            <MainLayout>
              <SearchResults />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
