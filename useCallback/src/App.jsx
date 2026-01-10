import { useCallback, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

function App() {
  const [count, setCount] = useState(0);
  const handlerClick=useCallback(
    ()=>{
    setCount(count +1)
  },[count])
  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={handlerClick}>Increment</button>
      <br /> <br />
      <ChildA btnName="Click Me"
        handlerClick={handlerClick}

      />
    </>
  );
}

export default App;
