import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const navigate=useNavigate();
    const handleInputs=(event)=>{
        setLoginData({...loginData,[event.target.name] : event.target.value})
    }
    console.log(loginData);
    const loginUser=async ()=>{
        const {email,password}=loginData;
        if(!email || !password){
            return window.alert("All fields are mandatory ! ")
        }
        console.log(email,password);
        const res=await fetch("http://localhost:5001/api/users/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email , 
                password : password
            })
        });
        const data=await res.json();
        if(res.status===400 || !data){
            window.alert("login unsuccessful email or password didn't match !");
            console.log("login unsuccessful email or password didn't match !");
            return;
        }
        else{
            window.alert("Login Successful !");
            console.log("Login Successful !");
            localStorage.removeItem('token');
            localStorage.setItem('token',data.accessToken);
            console.log(data.accessToken);
            navigate('/contacts')
            return;
        }
    }
  return (
    <div>
      <div className='login'>
        <label>Email : </label>
        <input type='text' placeholder='Enter email' name="email" onChange={handleInputs} /> <br/>
        <label>Password : </label>
        <input type='password' placeholder='Enter password' name="password" onChange={handleInputs} /> <br/>
        <button type='submit' onClick={loginUser}>Login</button>
      </div>
    </div>
  )
}

export default Login
