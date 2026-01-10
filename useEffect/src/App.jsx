import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import Logger from './components/Logger'


function App() {
  
  // const [counter,setCounter]=useState(0)
  // const [total,setTotal]=useState(1)
  
//variation 1: run on every render
// useEffect(()=>{
//   alert('i will run every render')
// })


//varivation 2
// useEffect(()=>{
//   alert('i will run every 1st render')
// },[])

//variaton 3:
// useEffect(()=>{
//   alert(`i will run every counter update ${counter}`)
// },[counter])

//variaton 4:
// useEffect(()=>{
//   alert('i will run  if chagne in count/total  then render')
// },[counter,total])

//variation 5: add clean up function 
// useEffect(()=>{
//   alert(`count updated ${counter}`)

//   return ()=>{
//     alert(`count is unmounted from the UI ${counter}`)
//   }
// },[counter])

  return (
    <div>
      {/* <button onClick={()=>setCounter(counter+1)}> Clicke Me {counter}</button>
      <button onClick={()=>setTotal(total+1)}> Clicke Me {total}</button> */}

      <Logger />
    </div>
  )
}

export default App
