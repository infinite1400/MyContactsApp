import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateContact = () => {
  const [updateData,setUpdateData]=useState({});
  const navigate=useNavigate();
  const location=useLocation();
  const handleInputs=(event)=>{
    setUpdateData({...updateData,[event.target.name]: event.target.value});
  };
  console.log(updateData);
  const updatefunc=async()=>{
    const token=localStorage.getItem('token');
    const res=await fetch(`http://localhost:5001/api/contacts/${location.state._id}`,{
      method : "PUT",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body : JSON.stringify({
        name : updateData.name , 
        email : updateData.email,
        phone : updateData.phone
      })
    });
    const data=await res.json();
    if(res.status===200){
      window.alert("Contact Updated Successfully !");
      console.log("Contact Updated Successfully !");
      console.log(data);
      navigate('/contacts');
    }
    else{
      window.alert("Error in Updating Contact !");
      console.log("Error in Updating Contact !");
    }
  }
  return (
    <div>
      <label>Name</label>
      <input type='text' name='name' placeholder={location.state.name} onChange={handleInputs} ></input><br/>
      <label>Email</label>
      <input type='text' name='email' placeholder={location.state.email} onChange={handleInputs} ></input><br/>
      <label>Phone</label>
      <input type='text' name='phone' placeholder={location.state.phone} onChange={handleInputs} ></input><br/>
      <button type='submit' onClick={updatefunc} >Update</button>
    </div>
  )
}

export default UpdateContact
