import React from 'react'

const ContactCard = ({Contact}) => {
  return (
    <div className='contact-card'>
        <div className='contact-card_name'>
            <p>Name : </p>
            <p>{Contact.name}</p>
        </div>
        <div className='contact-card_email'>
            <p>Email : </p>
            <p>{Contact.email}</p>
        </div>
        <div className='contact-phone'>
            <p>Phone : </p>
            <p>{Contact.phone}</p>
        </div>
    </div>
  )
}

export default ContactCard
