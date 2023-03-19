import logo from './logo.svg';
 import {useState} from "react";
import './App.css';
import './App.css';
function App() {

   
  const[Count, setCount]=useState(0);

  function decreaseHandler(){
    setCount(Count-1);
  }

  function increaseHandler(){
    setCount(Count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="wrapper">
      <div className="heading">Increment & Decrement</div>

       <div className="btn">
        <button onClick={decreaseHandler} className="decrement">-</button>
        <div className='count'>{Count}</div>
        <button onClick={increaseHandler} className="increment ">+</button>
       </div>

       <div onClick={resetHandler} className="reset">Reset</div>
    </div>
  );
}

export default App;
