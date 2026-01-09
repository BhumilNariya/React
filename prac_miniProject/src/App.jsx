import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
import UserContext from './context/userContext'


function App() {

  return (
    <UserContextProvider>
   <h1>Bhumil with react </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
