
import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import ToDoConnected from './Components/ToDoConnected';

const App = () => {
  const [ input, countInput ] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        To Do List Manager 
      </div>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
