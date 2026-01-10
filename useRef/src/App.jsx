import { useState } from "react";

import "./App.css";
import { useRef } from "react";
import StopWatch from "./components/StopWatch";

function App() {
  // const [count, setCount] = useState(0);
  // let val=1;

  // let btnRef = useRef();

  const [counter, setCounter] = useState(0);
  let btnref = useRef();

  return (
    <>
      <h1>Counter is {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click ME</button>
      <button
        onClick={() => (btnref.current.style.backgroundColor = "green")}
        ref={btnref}
      >
        Change Color of 1st Btn
      </button>

      {/* <h1>Hello</h1>
      <button onClick={()=>setCount(count+1)} 
      ref={btnRef}>
        Clicke me {count}
      </button>
      <button onClick={() => (btnRef.current.style.backgroundColor = "red")}
          onDoubleClick={()=>btnRef.current.style.backgroundColor='green'}
        >
        Change Color of 1 btn
      </button> */}
      <StopWatch />
    </>
  );
}

export default App;
