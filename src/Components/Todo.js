import React, { useState , useEffect } from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList';

const ToDo = () => {
  const [list, setList] = useState([]);

  const addItem = item => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let newlist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newlist);
    }
  };

// Second arg for useEffect is list of props, or array that it watches
// Whenever something in list changes, it re-renders
// The method will only be called once with passing of empty array
  useEffect(() => {
    let initialList = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    setList(initialList);
  },[])
  console.log('rendering list', list)
    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>
        <section className="todo">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          <div>
            <TodoList
              list={ list }
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );
}
export default ToDo;