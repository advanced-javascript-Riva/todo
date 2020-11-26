import './App.css';
import TodoConnected from './Components/TodoConnected';

const App = () => {

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
