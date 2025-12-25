import { useState } from 'react'
import Cart from './chai'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cart/>   
    <h1>Hello React Sutdy with Me.</h1> 
    </>
    
  )
}

export default App
