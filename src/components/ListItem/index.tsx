import React from 'react';
import { Item } from '../../types/Item';

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => (
  <div>{item.task}</div>
);

export default ListItem;
