
import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';


const App = () => {
  const [ input, setInput ] = useState(' ');

  return (
    <div>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
