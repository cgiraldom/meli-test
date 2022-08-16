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
      try {
        const result = await itemService.searchItems(query);
        const { items } = result;
        const firstFour = items.slice(0, 4);

        setItems(firstFour);
        setCategories(result.categories);
      } catch (error) {
        console.log(error);
      }
    }

    if (search) getItems(search);
  }, [search, setItems, itemService]);

  return (
    <section className="search-page">
      <Breadcrumb categories={categories} />
      <SearchResults foundItems={items} />
    </section>
  );
};
