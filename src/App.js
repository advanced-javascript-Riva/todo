import './App.css';
import TodoConnected from './Components/TodoConnected';
import { TodoContext } from './TodoContext';
import Form from 'react-bootstrap/Form';

const App = () => {
 
  return (
    <div className="App">
      <div className="App-header">
          <div className="homeTitle">Home </div>
        <div className="hideSwitch">
          <Form>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Hide Completed"
            />
          </Form>
        </div>
        </div>
       <div className="formAndTodo">
         <TodoContext.Provider value="difficulty"> 
         <TodoConnected/>
         </TodoContext.Provider>
       </div>
    </div>
  );
}
export default App;
