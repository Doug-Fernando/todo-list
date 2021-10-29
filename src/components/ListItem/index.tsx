import React, { useState } from 'react';

import deleteIcon from '../../icons/deleteIcon.svg';

import { Item } from '../../types/Item';

import { Container, DeleteTask, DeleteButton } from './style';

type Props = {
  item: Item;
  handleDone: (id: number) => void;
  deleteTask: (id: number) => void;
};

type Target = {
  target: {
    checked: boolean;
  };
};

const ListItem = ({ item, handleDone, deleteTask }: Props) => {
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
      <DeleteButton onClick={() => deleteTask(item.id)}>
        <DeleteTask src={deleteIcon} alt="deleteIcon" />
      </DeleteButton>
    </Container>
  );
};

export default ListItem;
