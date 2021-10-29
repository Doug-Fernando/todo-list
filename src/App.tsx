import React, { useState, useEffect } from 'react';

import * as AppStyle from './App.style';

import { Item } from './types/Item';

import ListItem from './components/ListItem';
import AddTask from './components/AddTask';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    const myList: string = localStorage.getItem('my-list') || '[]';
    setList(JSON.parse(myList));
  }, []);

  useEffect(() => {
    localStorage.setItem('my-list', JSON.stringify(list));
  }, [list]);

  const handleAddTask = (task: string) => (
    setList([
      ...list,
      {
        id: list.length + 1,
        task,
        done: false,
      },
    ]));

  const handleDone = (id: number): void => {
    setList(list.map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    }));
  };

  return (
    <AppStyle.Container>
      <AppStyle.Area>
        <AppStyle.Header>
          Lista de Tarefas
        </AppStyle.Header>
        <AddTask onEnter={handleAddTask} />
        <AppStyle.Info> Aperte ENTER para adicionar a tarefa</AppStyle.Info>
        {
          list.map((item) => (<ListItem key={item.id} item={item} handleDone={handleDone} />))
        }
      </AppStyle.Area>
    </AppStyle.Container>
  );
};

export default App;
