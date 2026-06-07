import { useState,useContext } from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [username,setusername]=useState('')
    const [passw,setpassw]=useState('')
     
    const {setuser}=useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setuser({username,passw})
    }     ///for sending data through contextapi

    return (
        <div>
            <h2>Login</h2>

            <input type='text'
            value={username} 
            onChange={(e)=>setusername(e.target.value)}
            placeholder="Username"/>

            <input type="text" 
            value={passw} 
            onChange={(e)=>setpassw(e.target.value)}
            placeholder="Password"/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login