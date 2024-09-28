import './App.css';
import AuthForm from './components/AuthForm';
import {TodoWrapper} from './components/TodoWrapper';
import Flower from './components/Flower';

import Footer from './components/Footer';


// import bg from './BackgroundImages/landscape idea pixel arts1.png';

function App() {
  return (

      // Place elements here

      <div className="App">
          <>
              <AuthForm/>
          </>

          <div className="Todo-list">
              <TodoWrapper/>
          </div>

          {/*TODO !!! Insert the flower here !!!*/}

          <Flower/>





          {/*At the bottom of the code this appears*/}
          <Footer/>





      </div>


  );
}

export default App;
