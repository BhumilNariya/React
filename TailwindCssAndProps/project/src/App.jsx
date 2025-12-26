import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() { 
    const  [counter,setCounter]=useState(15)
  const myObj={
      name:"bhumil",
      age:21
  
    }
  const addValue=()=>{
    // setCounter(counter+1)
    // setCounter(counter+1)  //batch  all setCouter doing same work
    // setCounter(counter+1)
    // setCounter(counter+1)

    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)//this are callback 
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl mb-3'>PHOENIX</h1>

      <Card username="bhumilNariya" btnText="Click Me!!" someObj={myObj}/>
      <br />
      <Card username="PHOENIX" btnText="Visit Me!!" someObj={myObj}/>

      <h1>Add Value:</h1>
      <button onClick={addValue}>Click Me: {counter}</button>
      <h1>Remve Value:</h1>
      <button onClick={removeValue}>Click Me: {counter}</button>
    </>
  )
}

export default App
