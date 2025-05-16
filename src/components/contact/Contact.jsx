import css from './Contact.module.css';
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { deleteContact, updateContact } from '../../redux/contacts/contactsOps';
import { ContactModal } from '../deleteModal/DeleteModal';
import { UpdateContactModal } from '../updateContactModal/UpdateContactModal';


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
        <div className={css.contactBox}>
            <Card elevation={4}>
            <CardContent>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className={css.contactDesc}>
                    <HiUser className={css.icon} size="18" />
                    <p>{contact.name}</p>
                </li>
                <li className={css.contactDesc}>
                    <FaPhoneAlt className={css.icon} size="14" />
                    <p>{contact.number}</p>
                </li>
                </ul>
            </CardContent>

            <CardActions sx={{ justifyContent: 'flex-end', paddingRight: 2 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton
                    aria-label="edit"
                    onClick={openUpdateModalClick}
                    sx={{
                    color: 'text.secondary',
                    '&:hover': {
                        color: 'primary.main',
                    },
                    }}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    aria-label="delete"
                    onClick={openDeleteModalClick}
                    sx={{
                    color: 'text.secondary',
                    '&:hover': {
                        color: 'error.main',
                    },
                    }}
                >
                    <DeleteIcon />
                </IconButton>
                </Stack>
            </CardActions>
            </Card>

            <ContactModal
            isOpen={isOpenDeleteModal}
            onConfirm={handleDeleteContact}
            onReject={closeDeleteModal}
            />

            <UpdateContactModal
            isOpen={isOpenUpdateModal}
            handleSave={handleUpdateContact}
            contact={contact}
            onClose={closeUpdateModal}
            />
        </div>
    );


}   