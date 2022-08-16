import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';

import { ResultsPage } from '../ResultsPage';
import { ItemService } from '../../../domain/services';
import { results } from '../../../tests/testData';

describe('ResultsPage', () => {
  test('male the call to fecth the items', async () => {
    const [firstItem] = results.items;
    const itemService: ItemService = {
      searchItems: jest.fn().mockResolvedValue(results),
      getItemById: jest.fn(),
    };

    render(
      <MemoryRouter initialEntries={['/items?search=query']}>
        <ResultsPage itemService={itemService} />
      </MemoryRouter>
    );

    expect(await screen.findByText(firstItem.title)).toBeInTheDocument();
  });
});
