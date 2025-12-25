import { useState } from 'react'
import Cart from './chai'


function App() {
  const [count, setCount] = useState(0)
  const username='Bhumil Nariya' //   `${}` in javaScript
  return (
    <>
    <Cart/>   
    <h1>Hello React Sutdy with {username}.</h1>  //not write if else ,loop and anything onyly write 
                    final outcomes.. called---- evaluated expression
    </> 
    
  )
}

export default App
