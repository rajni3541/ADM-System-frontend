import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import signin from './Signin.style.css'

function Signin() {
    const [data, setData] = useState({
        username: "",
        email: "",
        adress: "",
        password: "",



    })

    const { username, password, email, adress } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const signinHandler = e => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div className='signin'>
            <center>
                <div className='input-text'>
                    <h1>ADMIN DASHBOARD MANAGEMENT SYSTEM</h1>
                    <p>SIGN-IN FROM</p>
                    
                    <form onsignin={signinHandler}>

                        <input type="text" name="username" placeholder="UserName" value={username} onChange={changeHandler} /><br />
                        <input type="email" name="email" placeholder="UserEmail" value={email} onChange={changeHandler} /><br />
                        <input type="text" name="adress" placeholder="UserAdress" value={adress} onChange={changeHandler} /><br />
                        <input type="password" name="password" placeholder="UserPassword" value={password} onChange={changeHandler} /><br />
                        <button>signin</button>
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </form>
                </div>
            </center>

        </div >

    );
}
export default Signin   
