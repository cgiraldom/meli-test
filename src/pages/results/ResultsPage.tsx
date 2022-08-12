import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Item, Category } from '../../domain/item';
import { ItemService } from '../../domain/services';
import { SearchResults, Breadcrumb } from '../../components';

type ResultsProps = {
  itemService: ItemService;
};

export const ResultsPage = ({ itemService }: ResultsProps): JSX.Element => {
  const [items, setItems] = React.useState<Array<Item>>([]);
  const [categories, setCategories] = React.useState<Array<Category>>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  React.useEffect(() => {
    async function getItems(query: string) {
      const result = await itemService.searchItems(query);

      setItems(result.items);
      setCategories(result.categories);
    }

    if (search) getItems(search);
  }, [itemService, search]);

  return (
    <section className="search-page">
      <Breadcrumb categories={categories} />
      <SearchResults foundItems={items} />
    </section>
  );
};
