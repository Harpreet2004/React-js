import './App.css'
import { useState } from 'react';



function App() {
  
  let [count,setCount] = useState(15);

  const increaseCounter = () => {
    // if(count < 20) {
    //   count = count +1;
    // } 
   
    // *****THIS WILL INCREASE THE COUNT BY 1
    // setCount(count + 1);

    // ***** THIS WILL NOT INCREASE THE COUNT BY 3 
    // ***** BECAUSE REACT THINKS THAT THESE 3 LINES OF CODE IS BEING PASSED
    // ***** IN A BATCHES AND SO IT WON'T INCREASE THEM

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);


    // *****THIS WILL UPDATE THE COUNT BY 3 
    // *****EVERY TIME IT IS CLICKED ON
    // *****THIS IS HAPPENING BECAUSE I AM STORING THE PREV STATE OF A VARIABLE
    // *****AND EVERY TIME I CLICK ON BTN THEN THE PREV STATE OF A VAR IS INCREASING

    // setCount(prevCount => prevCount +1);
    // setCount(prevCount => prevCount +1);
    // setCount(prevCount => prevCount +1);
  }
  
  const decreaseCounter = () => {
    if(count > 0) {
      count = count - 1;

    }
    setCount(count);
  }


  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter is: {count}</h3>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    
    </>
  )
}

export default App
