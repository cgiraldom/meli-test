import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layouts';
import { ResultsPage } from './pages/results';
import { ItemPage } from './pages/item';
import { NotFound } from './pages/notFound';
import { itemService } from './http/services/itemService';
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
              <ResultsPage itemService={itemService} />
            </MainLayout>
          }
        />
        <Route
          path="/items/:id"
          element={
            <MainLayout>
              <ItemPage itemService={itemService} />
            </MainLayout>
          }
        />
        <Route
          path="/notfound"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
