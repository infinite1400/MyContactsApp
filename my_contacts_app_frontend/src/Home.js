import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const registerPage = () => {
        navigate('/register');
    }
    const loginPage = () => {
        navigate('/login');
    }
    return (
        <div>
             <h1>Home</h1>
            <button type='submit' onClick={registerPage}> Register</button>
            <button type='submit' onClick={loginPage} >Login</button>
        </div>
    )
}

export default Home
