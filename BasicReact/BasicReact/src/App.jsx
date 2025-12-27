import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {



   let [counter,setCounter]= useState(15)


  const addValue=()=>{
      console.log("Cilcked",counter);
      setCounter(counter+1);
  }
  const removeValue=()=>{
      console.log("Cilcked",counter);
      setCounter(counter-1);
  }
  
  return (
    <>
      <h1>Bhumil Nariya</h1>
      <h2>Counter Value is :{counter}</h2>
      <button onDoubleClick={addValue}>Like Post:{counter}</button>
      <button onDoubleClick={()=>setCounter(counter+1)}>Like Post:{counter}</button>
      <button onClick={removeValue}>Dislike Post:{counter}</button>
      
     
      
    </>
  )
}

export default App
