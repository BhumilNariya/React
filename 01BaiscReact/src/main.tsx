import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


function MyApp(){
  return(
    <div>
      <h1> MyApp function!!!!</h1>
    </div>
  )
}

const ReactElement={
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank',
    },
    children:"click me to visit google!!"
}

const reactelement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  'click me Google'
)


const anotherElement=(
   <a href="htts://goggle.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    anotherElement -- working this convert in to the tree 
    ReactElement --no work in this beacuse of only understand function not this typoe of code 
    <App /> 
    <MyApp/> /*also we write with only MyApp */
    
    reactelement --(working this but inthis not working version diff) 

  </StrictMode>,
)
