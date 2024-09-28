import './App.css';
import Sky from "./components/Sky.js";
import AuthForm from './components/AuthForm';
import {TodoWrapper} from './components/TodoWrapper';

function App() {
  return (

      // Place elements here

      <div className="App">
          <>
              <Sky/>
              <AuthForm/>


          </>

          <div className="Todo-list">
              <TodoWrapper/>
          </div>





      </div>


  );
}

export default App;
