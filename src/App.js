import './App.css';
import TodoConnected from './Components/TodoConnected';
import { TodoContext } from './TodoContext';

const App = () => {

  return (
    <div className="App">
      <div className="App-header">
          <div className="homeTitle">Home </div>
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
