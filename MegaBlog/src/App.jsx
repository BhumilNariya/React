import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import {login , logout } from "./store/authSlice"
import {Header,Footer} from "./components"
import {Outlet} from "react-router-dom"
import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL) // BCZ of using React  not run this
  console.log(import.meta.env.VITE_APPWRITE_URL); //BCz of using Vite

  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()   
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally( ()=>setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h- flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
            ToDo: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App;
