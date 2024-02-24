import express from 'express';
import { getContacts, createContact, getContact, UpdateContact, deleteContact } from '../controllers/contactController.js';
import validateToken from '../middleware/validateTokenHandler.js';
const contactRouter = express.Router();
contactRouter.use(validateToken);
contactRouter.get('/', getContacts)

contactRouter.post('/', createContact)

contactRouter.get('/:id', getContact)

contactRouter.put('/:id', UpdateContact)

contactRouter.delete('/:id', deleteContact)


export default contactRouter