import React, { useState } from 'react';
import { Item } from '../../types/Item';

import Container from './style';

type Props = {
  item: Item;
  handleDone: (id: number) => void;
};

type Target = {
  target: {
    checked: boolean;
  };
};

const ListItem = ({ item, handleDone }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleChecked = ({ target: { checked } }: Target) => {
    setIsChecked(checked);
    handleDone(item.id);
  };

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        onChange={handleChecked}
        checked={isChecked}
      />
      <label htmlFor="task">{item.task}</label>
    </Container>
  );
};

export default ListItem;
