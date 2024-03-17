import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactById = contactId => Contact.findById(contactId);

export const removeContact = contactId => Contact.findByIdAndDelete(contactId);

export const addContact = data => Contact.create(data);

export const updateContact = (contactId, data) => Contact.findByIdAndUpdate(contactId, data);

export const updateStatusContact = (contactId, favorite) => Contact.findByIdAndUpdate(contactId, favorite);