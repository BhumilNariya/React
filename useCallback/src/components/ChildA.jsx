import React from 'react'

const ChildA=React.memo(
    (props)=>{
    console.log("i got re-rendered again")
    return(
        <div>
            <button onClick={props.handlerClick}>{props.btnName}</button>
        </div>
    )
}
)

export default ChildA
