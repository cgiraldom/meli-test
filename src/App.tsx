import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts';
import { ResultsPage } from './pages/results';
import { ItemPage } from './pages/item';
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
              <ResultsPage itemService={testService} />
            </MainLayout>
          }
        />
        <Route
          path="/items:id"
          element={
            <MainLayout>
              <ItemPage itemService={testService} />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
