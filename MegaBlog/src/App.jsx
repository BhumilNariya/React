import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL) // BCZ of using React  not run this
  console.log(import.meta.env.VITE_APPWRITE_URL)  //BCz of using Vite

  return (
    <>
      <h1>Mega Blog with AppWrite</h1>
    </>
  )
}

export default App
