import React, { useState, KeyboardEvent } from 'react';
import Container from './style';

type Props = {
  onEnter: (task: string) => void;
};

const AddTask = ({ onEnter }: Props) => {
  const [task, setTask] = useState('');

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' && task !== '') {
      onEnter(task);
      setTask('');
    }
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={({ target }) => setTask(target.value)}
        onKeyUp={handleKeyUp}
      />
      <div>➕</div>
    </Container>
  );
};

export default AddTask;
