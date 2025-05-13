import css from './Contact.module.css';
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { deleteContact, updateContact } from '../../redux/contacts/contactsOps';
import { ContactModal } from '../deleteModal/deleteModal';
import { UpdateContactModal } from '../updateContactModal/updateContactModal';


export function Contact({ contact }) {

    const dispatch = useDispatch();
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

    // For delete contact
    
    function openDeleteModalClick() {
        setIsOpenDeleteModal(true);
    }

    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id))
        setIsOpenDeleteModal(false);
        toast.success('Contact was successfully deleted!')
    }

    function closeDeleteModal() {
        setIsOpenDeleteModal(false);
    }

    //For update
    
    function openUpdateModalClick() {
        setIsOpenUpdateModal(true);
    }

    const handleUpdateContact = (values) => {
        const updateData = {};

        if (values.name !== contact.name) {
            updateData.name = values.name;
        }

        if (values.number !== contact.number) {
            updateData.number = values.number;
        }

        if (Object.keys(updateData).length === 0) {
            toast('No changes were made');
            return;
        }
        console.log(updateData);
        
        dispatch(updateContact({ contactId: contact.id, updateData }));
        toast.success('The contact was successfully updated!')
        setIsOpenUpdateModal(false);
    };
    

    function closeUpdateModal() {
        setIsOpenUpdateModal(false);
    }
    
    return (
        <div className={css.itemBox}>
            <ul>
                <li><p><HiUser className={css.icon} />{contact.name}</p></li>
                <li><p><FaPhoneAlt className={css.icon} />{contact.number}</p></li>
            </ul>
            <button className={css.btn} onClick={openDeleteModalClick}>Delete</button>
            <button className={css.btn} onClick={openUpdateModalClick}>Update</button>
            <ContactModal isOpen={isOpenDeleteModal} onConfirm={handleDeleteContact} onReject={closeDeleteModal} />
            <UpdateContactModal isOpen={isOpenUpdateModal} handleSave={handleUpdateContact} contact={contact} onClose={closeUpdateModal} />
        </div>
    )

}   