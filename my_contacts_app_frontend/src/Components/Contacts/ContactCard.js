import React from 'react'
import '../../Css/ContactCard.css'
import { useNavigate } from 'react-router-dom';
const ContactCard = ({ Contact }) => {
  const navigate=useNavigate();
  const id = Contact._id;
  console.log(id);
  const deleteContact = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    const res = await fetch(`http://localhost:5001/api/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const data = await res.json();
    if (res.status === 200) {
      window.alert("Contact Deleted Successfully !");
      console.log("Contact Deleted Successfully !")
      console.log(data);
    }
    else {
      window.alert("Error in Deleting Contact");
      console.log("Error in Deleting Contact")
    }
  }
  const updatePage = () => {
    navigate('/contacts/update',{state : Contact});
}
  return (
    <div className='contact-card'>
      <div className='contact-card_info'>
        <div className='contact-card_name'>
          <p>Name : {Contact.name} </p>
        </div>
        <div className='contact-card_email'>
          <p>Email : {Contact.email}</p>
        </div>
        <div className='contact-phone'>
          <p>Phone : {Contact.phone}</p>
        </div>
      </div>
      <div className='contact-card_btn'>
        <button type='submit' onClick={updatePage} >Update</button>
        <button type='submit' onClick={deleteContact}>Delete</button>
      </div>
    </div>
  )
}

export default ContactCard
