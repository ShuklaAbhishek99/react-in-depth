import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // counter += 1;
    if(counter<20){
      setCounter(counter + 1);
    }
    console.log("clicked", counter);
  };
  
  const subtractValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
    console.log("clicked", counter);
  };
  return (
    <>
      <h1>Coffee and React</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subtractValue}>Subtract Value {counter} </button>
      <p>Footer:{counter} </p>
    </>
  );
}

export default App;
