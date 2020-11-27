import React, { useEffect, useState , useContext} from 'react';
import { TodoContext } from '../TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import AxiosHook from '../AxiosHook';
import './TodoConnected.css';

const ToDoConnected = () => {
const [list, setList] = useState([]);
let sortField = useContext(TodoContext);

const refreshList = async () => {
  const newList = await AxiosHook.getTodos();
  const sortList = newList.sort((a, b) => {
    if(b[sortField] > a[sortField]) {
      return 1;
    } else if(a[sortField] > b[sortField]){
      return -1
    } else {
      return 0;
    }
  })
  setList(sortList);
}
useEffect(() => {
  refreshList();
  //useEffect will be called when values change
}, [])

  return (
    <div className="todoManagerList">
      <div className="itemsToComplete">
      To Do List Manager ({list.filter(item => !item.complete).length})
      </div>
      <section className="todo">
        <div>
          {/* When form submits a new item, it will call refreshList function */}
          <TodoForm refreshList={ refreshList }/> 
        </div>
        <div className="todoList">
          <TodoList refreshList={ refreshList }
            list={list}
          />
        </div>
      </section>
    </div>
  );
};
export default ToDoConnected;