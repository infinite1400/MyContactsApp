import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContactCard from './ContactCard';
import Loading from '../Loading';
// import { Button } from 'react-scroll'
const URL = 'http://localhost:5001/api/contacts';
const Contacts = () => {
    const [contactsData, setContactsData] = useState([]);
    const [contactData, setContactData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getContacts = async () => {
            console.log("click")
            const token = localStorage.getItem('token');
            console.log(token);
            const res = await fetch(URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await res.json();
            setContactsData(data);
        }
        getContacts();
    }, [])
    if (!contactsData.length) { return <Loading /> }
    console.log(contactsData);
    const getContact = async () => {
        console.log("click")
        const token = localStorage.getItem('token');
        console.log(token);
        const res = await fetch(`${URL}/65d9b12a8b1a4c212a8ded80`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json();
        setContactData(data);
        return;
    }
    const deleteContact = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        const res = await fetch(`${URL}/65d9b12a8b1a4c212a8ded80`, {
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
    console.log(contactData);
    const updatePage = () => {
        navigate('/contacts/update');
    }
    return (
        <div className='Contacts'>
            {/* <Loading /> */}
            <Link to={'/contacts/create'}>
                <button type='Button' color='Black'>Create</button>
            </Link><br />
            <button type='submit'>Get Contacts</button><br />
            {
                contactsData.map((contact, index) => (
                    <ContactCard key={index} Contact={contact} />
                ))
            }
            <button type='submit' onClick={getContact}>Get Contact</button><br />
            <button type='submit' onClick={updatePage}>Update Contact</button><br />
            <button type='submit' onClick={deleteContact}>Delete Contact</button><br />


        </div>
    )
}

export default Contacts
