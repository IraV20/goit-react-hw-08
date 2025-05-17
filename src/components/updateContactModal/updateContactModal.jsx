import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import Button from '@mui/material/Button';

import css from "./updateContactModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Must be only digits")
      .min(3, "Too Short!")
      .max(8, "Too Long!")
      .required("Required"),
  });

export const UpdateContactModal = ({ isOpen, handleSave, contact, onClose }) => {
    
    const fielId = useId();
    
    return (
        <Modal
        isOpen={isOpen}
        contact={contact}
        onRequestClose={onClose}
        style={customStyles}
        >
        <Formik initialValues={{
            name: contact.name, 
            number: contact.number}} 
            validationSchema={ContactSchema}
            onSubmit={handleSave}>
                <Form className={css.form}> 
                <h2>Update Contact</h2>
                <div className={css.formElem}>
                <label htmlFor={`${fielId}-name`}>Name</label>
                <Field className={css.formInput} type="text" name="name" id={`${fielId}-name`}></Field>
                <ErrorMessage name='name' component='span' className={css.err}/>
                </div>

                <div  className={css.formElem}>
                <label htmlFor={`${fielId}-number`}>Number</label>
                <Field className={css.formInput} type="tel" name="number" id={`${fielId}-number`}></Field>
                <ErrorMessage name='number' component='span' className={css.err}/>
                </div>
                
                <Button variant="contained" className={css.formBtn} type='submit'>Save</Button>
            </Form>
        </Formik></Modal>
    )
}
