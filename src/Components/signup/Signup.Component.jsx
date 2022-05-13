import React, { useState } from 'react'
import signup from './Signup.style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
    const [data, setData] = useState({
        username: "",
        email: "",
        adress: "",
        password: "",

        confirmPassword: '',


    })

    const { username, password, email, adress, confirmPassword } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const signupHandler = e => {
        e.preventDefault();
        // console.log(data);
        axios.post('http://localhost:8080/api/users/register', {
            name: username,
            email: email,
            adress: adress,
            password: password,
            confirmPassword: confirmPassword
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return (
        <div className='signup'>
            <center>
                <div className='input-text'>
                    <p>SIGN-UP FROM</p>
                    
                    <form onSubmit={signupHandler}>

                        <input type="text" name="name" placeholder="UserName" value={username} onChange={changeHandler} /><br />
                        <input type="email" name="email" placeholder="UserEmail" value={email} onChange={changeHandler} /><br />
                        <input type="text" name="adress" placeholder="UserAddress" value={adress} onChange={changeHandler} /><br />
                        <input type="password" name="password" placeholder="UserPassword" value={password} onChange={changeHandler} /><br />
                        <input type="password" name="confirmPassword" placeholder="ConfrimPassword" value={confirmPassword} onChange={changeHandler} /><br />
                        <button>signup</button>
                        
                    </form>
                </div>
            </center>

        </div >

    );
}
export default Signup  
