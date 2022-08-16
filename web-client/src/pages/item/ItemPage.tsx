import React from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetails } from '../../domain/item';
import { ItemService } from '../../domain/services';
import { ItemDetailsCard, Breadcrumb } from '../../components';

type ItemProps = {
  itemService: ItemService;
};

export const ItemPage = ({ itemService }: ItemProps): JSX.Element => {
  const [item, setItem] = React.useState<ItemDetails>();
  const { id } = useParams();

  React.useEffect(() => {
    async function getItem(id: string) {
      const result = await itemService.getItemById(id);
      console.log(result);

      setItem(result.item);
    }

    if (id) getItem(id);
  }, [itemService, id]);

  return item ? (
    <section className="item-page">
      <Breadcrumb categories={item.categories} />
      <ItemDetailsCard item={item} />
    </section>
  ) : (
    <></>
  );
};
