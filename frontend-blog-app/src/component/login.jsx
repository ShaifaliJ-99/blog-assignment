import { useState } from "react"

const Login=()=>{
let [email,setemail]=useState("");
let [name,setname]=useState("");
let [pass,setPass]=useState("");
const handleLogin = (e) =>{
    e.preventDefault();
    
console.log(email,name,pass)
}
    return <div>
       <h1> Login Page</h1>

       <form action="" onSubmit={handleLogin}>

        <input type="text" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/>
        <input type="text" placeholder="User Name" value={name} onChange={(e)=>{setname(e.target.value)}}/><br/>
        <input type="text" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/><br/>
        <input type="submit" value="SUBMIT" />
       </form>
        
    </div>
}
export default Login