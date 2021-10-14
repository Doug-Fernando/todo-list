import React, { useState, useEffect } from 'react';

import * as AppStyle from './App.style';

import { Item } from './types/Item';

import ListItem from './components/ListItem';
import AddTask from './components/AddTask';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    setList([
      { id: 1, task: 'Comprar algo', done: false },
      { id: 2, task: 'Bolar um plano', done: true },
    ]);
  }, []);

  const handleAddTask = (task: string) => (
    setList([
      ...list,
      {
        id: list.length + 1,
        task,
        done: false,
      },
    ])
  );

  return (
    <AppStyle.Container>
      <AppStyle.Area>
        <AppStyle.Header>
          Lista de Tarefas
        </AppStyle.Header>
        <AddTask onEnter={handleAddTask} />
        {
          list.map((item) => (<ListItem key={item.id} item={item} />))
        }
      </AppStyle.Area>
    </AppStyle.Container>
  );
};

export default App;
