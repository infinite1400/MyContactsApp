import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [userdata, setUserData] = useState({});
    const navigate = useNavigate();
    const handleInputs = (event) => {
        setUserData({ ...userdata, [event.target.name]: event.target.value });
    }
    const registerFunc = async (event) => {
        const { username, email, password } = userdata;
        const res = await fetch('http://localhost:5001/api/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert('Invalid Registration')
            console.log("Invalid Registration")
        }
        else {
            window.alert('Registration successful')
            console.log("Registration successful")
            console.log(data);
            navigate('/login');
        }
    }
    console.log(userdata)
    return (
        <div className='register'>
            <form className='register-form'>
                <label>Username : </label>
                <input type='text' placeholder='Enter username' name='username' onChange={handleInputs} /><br />
                <label>Email : </label>
                <input type='text' placeholder='Enter email' name='email' onChange={handleInputs} /><br />
                <label>Username : </label>
                <input type='password' placeholder='Enter password' name='password' onChange={handleInputs} /><br />
            </form>
            <button type='submit' onClick={registerFunc}>Register</button>
        </div>
    )
}

export default Register
