import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {
    const [contactData, setContactData] = useState({});
    const navigate=useNavigate();
    const handleInputs = (event) => {
        setContactData({ ...contactData, [event.target.name]: event.target.value })
    }
    console.log(contactData);
    const createUser = async () => {
        console.log(localStorage.getItem('token'));
        const { name, email, phone } = contactData;
        if (!name || !email || !phone) {
            return window.alert("All fields are mandatory");
        }
        const token=localStorage.getItem('token');
        const res = await fetch('http://localhost:5001/api/contacts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        })
        const data = await res.json();
        console.log("data",data);
        if (res.status === 400 || !data) {
            window.alert("Error in adding the user");
            console.log("Error in adding the user");
            return;
        }
        else {
            window.alert("Contact created successfully");
            console.log("Contact created successfully");
            console.log(data);
            navigate('/contacts');
            return;
        }

    }
    return (
        <div className='Addcontact'>
            <label>Name </label>
            <input type='text' placeholder='Enter Name' name='name' onChange={handleInputs} /> <br />
            <label>Email </label>
            <input type='text' placeholder='Enter Email' name='email' onChange={handleInputs} /> <br />
            <label>Phone </label>
            <input type='text' placeholder='Enter Phone' name='phone' onChange={handleInputs} /> <br />
            <button type='submit' onClick={createUser} >Create</button>
        </div>
    )
}

export default CreateContact
