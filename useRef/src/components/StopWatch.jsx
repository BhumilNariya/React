import React from "react";
import { useState,useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);

  function startTimer() {
    timeRef.current = setInterval(() => {
      setTime(time=>time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  return (
    <div>
      <h1>StopWatch :{time} in second</h1>
      <br/>
      <br />
      <button onClick={startTimer}>Start</button>
      <br/>
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br/>
      <br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StopWatch;
