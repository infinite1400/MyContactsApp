import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';
//@desc Get all contacts
//@route Get /api/contacts
//@access private

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ user_id: req.user.id });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ message: "USER NOT FOUND" })
    }
}

//@desc Create new contact
//@route Post /api/contacts
//@access private

const createContact = async (req, res) => {
    try {
        console.log("The request Body is :-", req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400).json({ message: "All fields are Mandatory ! " });
        }
        const contact = await Contact.create({
            name: name,
            email: email,
            phone: phone,
            user_id: req.user.id,
        });
        res.status(201).json({contact : contact});
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
}

//@desc Get contact by Id
//@route Get /api/contacts/:id
//@access private

const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById({ _id: id });
        if (contact) {
            res.status(200).json({contactData : contact});
        }
        else {
            res.status(404).json({msg : "CONTACT NOT FOUND"});
        }
    }
    catch (error) {
        res.status(400).json({Error : error});
    }

}

//@desc Update contact by Id
//@route Put /api/contacts/:id
//@access private

const UpdateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const contact = await Contact.findById({ _id: id });

        if (!contact) {
            res.status(404).json({msg : "Contact not found"});
        }
        else {
            if (contact.user_id.toString() !== req.user.id) {
                res.status(403).json({msg : "You are not authorized to perform this action"});
            }
            if (name) contact.name = name;
            if (email) contact.email = email;
            if (phone) contact.phone = phone;
            await contact.save();
            res.status(200).json({ message: `Update contact for ${req.params.id}` })
        }

    }
    catch (error) {
        res.status(400).json({ message: error })
    }
}

//@desc Delete contact by Id
//@route Delete /api/contacts/:id
//@access private

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById({ _id: id });
        if (contact.user_id.toString() !== req.user.id) {
            res.status(403).json({ msg : "You are not authorized to perform this action"});
        }
        else {
            await Contact.deleteOne({ _id: id });
            res.status(200).json({ message: `Delete contact for ${req.params.id}` })
        }
    }
    catch (error) {
        res.status(400).json({ message: error })
    }
}

export { getContacts, createContact, getContact, UpdateContact, deleteContact }