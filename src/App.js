import './App.css';
import React, { useState } from 'react';
import TodoConnected from './Components/TodoConnected';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const [ input, countInput ] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
          <div className="homeTitle">Home </div>
        </div>
       <div className="formAndTodo">
         <TodoConnected/>
       </div>
    </div>
  );
}
export default App;
