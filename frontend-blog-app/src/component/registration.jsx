import { useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";

const Registration = () => {
    let [email, setemail] = useState("");
    let [name, setname] = useState("");
    let [pass, setPass] = useState("");
    const handleRegisration = async (e) => {
        e.preventDefault();

        const checkAxios = await axios.post("http://localhost:4500/user/register", {
            email, "user": name, pass
        });
        console.log(checkAxios)
        console.log(email, name, pass)
    }
    return <div>
        <h1> REGISTRATION</h1>

        <form action="" onSubmit={handleRegisration}>

            <input type="text" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} /><br />
            <input type="text" placeholder="User Name" value={name} onChange={(e) => { setname(e.target.value) }} /><br />
            <input type="text" placeholder="Password" value={pass} onChange={(e) => { setPass(e.target.value) }} /><br />
            <input type="submit" value="SUBMIT" />
        </form>

<div>
    <Link to={'/'}>Go back Home</Link>
</div>
    </div>
}
export default Registration;