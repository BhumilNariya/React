import "./App.css";
import UserContectProvider from "./Context/UserContectProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";


function App() {
 

  return (
    <UserContectProvider>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
    </UserContectProvider>
  );
}

export default App;
