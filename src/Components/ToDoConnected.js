import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import AxiosHook from '../AxiosHook';
import './TodoConnected.css';

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
    <div className="todoManagerList">
      <div className="itemsToComplete">
      To Do List Manager ({list.filter(item => !item.complete).length})
      </div>
      <section className="todo">
        <div>
          <TodoForm/> 
        </div>
        <div className="todoList">
          <TodoList
            list={list}
          />
        </div>
      </section>
    </div>
  );
};
export default ToDoConnected;