import './App.css';
import React, { useState } from 'react';
import Todo from './Components/Todo';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const [ input, countInput ] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
          <div className="homeTitle">Home </div>
        </div>
        <div className="spinner">
          <Spinner animation="border"  variant="primary" role="status">
          <span className="sr-only">Loading Request</span>
          </Spinner>
        </div>
       <div className="formAndTodo">
         <Todo/>
       </div>
    </div>
  );
}
export default App;
