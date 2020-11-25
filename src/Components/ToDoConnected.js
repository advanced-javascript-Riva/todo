import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import AxiosHook from '../AxiosHook';

const ToDoConnected = () => {
const [list, setList] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const newList = await AxiosHook.getTodos();
    setList(newList);
  }
  fetchData();
  //useEffect will be called when values change
}, [])
  return (
    <>
      <header>
        <h2>
          To Do List Manager ({list.filter(item => !item.complete).length})
        </h2>
      </header>
      <section className="todo">
        <div>
          <TodoForm/> 
        </div>
        <div>
          <TodoList
            list={list}
          />
        </div>
      </section>
   
    </>
  );
};
export default ToDoConnected;