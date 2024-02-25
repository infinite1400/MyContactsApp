import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Css/Contacts.css'
import ContactCard from './ContactCard';
import Loading from '../Loading';
// import { Button } from 'react-scroll'
const URL = 'http://localhost:5001/api/contacts';
const Contacts = () => {
    const [contactsData, setContactsData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const data = contactsData;
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
    }, [data])
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
    console.log(contactData);
    const updatePage = () => {
        navigate('/contacts/update');
    }
    const jj = contactsData;
    return (
        <div className='Contacts'>
            <Link to={'/contacts/create'}>
                <button type='Button' color='Black'>Create</button>
            </Link><br />
            <div className='Contacts_Contact-card'>
            {
                contactsData.map((contact, index) => (
                    <ContactCard key={index} Contact={contact} />
                ))
            }
            </div>


        </div>
    )
}

export default Contacts
