import React, { useState } from 'react'
import './Signup.style.css'
import axios from 'axios';
// import  Link  from 'react-router-dom';

const Signup =() => {
    const [data, setData] = useState({})

    const changeHandler = (event) => {
        const {name,value} = event.target
        setData({...data,[name]:value});
    }

    const signupHandler = () => {
        // e.preventDefault();
        // console.log(data)
        axios.post('http://localhost:8080/api/users/register', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    return (
        <div className='signup'>
            <center>
                <div className='input-text'>
                    <p>SIGN-UP FROM</p>
                    
                    <form >

                        <input type="text" name="username" placeholder="UserName"  onChange={changeHandler} /><br />
                        <input type="email" name="email" placeholder="UserEmail" onChange={changeHandler} /><br />
                        <input type="text" name="adress" placeholder="UserAddress"  onChange={changeHandler} /><br />
                        <input type="password" name="password" placeholder="UserPassword" onChange={changeHandler} /><br />
                        <input type="password" name="confirmPassword" placeholder="ConfrimPassword" onChange={changeHandler} /><br />
                        <button onClick={signupHandler}>signup</button>
                        
                    </form>
                </div>
            </center>

        </div >

    );
}
export default Signup  
