import React,{useState,useContext} from 'react'
import UserContext from  '../Context/UserContext'


function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
            e.preventDefault()
            setUser({username,password})
    
    }

    return (
        <div >
            <section>
            <h2>Login</h2>
            <label htmlFor="username-field">Username: </label>
            <input type="text"
                    id='username-filed'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
             placeholder='username'  />
             <br />
             <br />
             <label htmlFor="password-field">Password: </label>
            <input type="text"
            id='password-field'
             value={password}
                onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'  />
            <br />
            <br />

            <button onClick={handleSubmit}>Submit</button>
            </section>
        </div>

    )
}

export default Login
