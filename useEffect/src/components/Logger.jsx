import React, { useEffect, useState } from 'react'

function Logger() {
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log(counter)
    })
    return (
        <div>
            <h1>Count:{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}> Clicke Me</button>
        </div>
        
    )
}

export default Logger
