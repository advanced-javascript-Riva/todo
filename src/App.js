import './App.css';
import React, { useState } from 'react';
import Todo from './Components/Todo';


const App = () => {
  const [ input, countInput ] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <div>Home </div>
      </div>
      <div className="formAndTodo">
      <Todo/>
      </div>
    </div>
  );
}

export default App;
