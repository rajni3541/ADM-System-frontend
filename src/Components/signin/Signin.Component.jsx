import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signin from './Signin.style.css'
import axios from 'axios'

const SignIn =()=> {
    const [data, setData] = useState({
        username: "",
        email: "",
        adress: "",
        password: "",



    })

    // const { username, password, email, adress } = data;

    const changeHandler = (event) => {
        const {name,value} = event.target
        setData({ ...data, [name]: value });
    }

    const signinHandler = e => {
        e.preventDefault();
        axios.post("https://login-backend.vercel.app/app/user/signin", {
            email: data.email,
            password: data.password
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        // console.log(data);
    }
    return (
        <div className='signin'>
            <center>
                <div className='input-text'>
                    <h1>ADMIN DASHBOARD MANAGEMENT SYSTEM</h1>
                    <p>SIGN-IN FROM</p>
                    
                    <form >

                        {/* <input type="text" name="username" placeholder="UserName"  onChange={changeHandler} /><br /> */}
                        <input type="email" name="email" placeholder="UserEmail" onChange={changeHandler} /><br />
                        {/* <input type="text" name="adress" placeholder="UserAdress"  onChange={changeHandler} /><br /> */}
                        <input type="password" name="password" placeholder="UserPassword"  onChange={changeHandler} /><br />
                        <button onClick={signinHandler}>signin</button>
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </form>
                </div>
            </center>

        </div >

    );
}
export default SignIn   



