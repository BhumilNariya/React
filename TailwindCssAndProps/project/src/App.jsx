import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
 const myObj={
      name:"bhumil",
      age:21
 }
  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl mb-3'>PHOENIX</h1>
      <Card username="bhumilNariya" btnText="Click Me!!" someObj={myObj}/>
      <br />
      <Card username="PHOENIX" btnText="Visit Me!!" someObj={myObj}/>
    </>
  )
}

export default App
