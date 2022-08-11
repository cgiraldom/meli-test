import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts';
import { SearchPage } from './pages/search';
import { testService } from './tests/testService';
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
          path="/items"
          element={
            <MainLayout>
              <SearchPage itemService={testService} />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
