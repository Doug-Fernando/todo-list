import React, { useState } from 'react';
import { Item } from '../../types/Item';

import Container from './style';

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        onChange={({ target }) => setIsChecked(target.checked)}
        checked={isChecked}
      />
      <label htmlFor="task">{item.task}</label>
    </Container>
  );
};

export default ListItem;
