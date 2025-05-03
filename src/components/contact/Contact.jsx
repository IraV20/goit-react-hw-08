import css from './Contact.module.css';
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { ContactModal } from '../deleteModal/deleteModal';
import { useState } from 'react';

function Contact({contact}) {

    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    

    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id))
        setIsOpenModal(false);
    }
    
    function openModalClick() {
        setIsOpenModal(true);
    }

    function closeModal() {
        setIsOpenModal(false);
    }
    
    
 return(
    <div className={css.itemBox}>
        <ul>
            <li><p><HiUser className={css.icon}/>{contact.name}</p></li>
            <li><p><FaPhoneAlt className={css.icon}/>{contact.number}</p></li>
        </ul>
        <button className={css.btn} onClick={openModalClick}>Delete</button>
        <ContactModal isOpen={isOpenModal} onConfirm={handleDeleteContact} onReject={closeModal}/>
    </div>
 )    

}

export default Contact;
