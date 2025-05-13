import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from '../../redux/contacts/contactsOps';
import css from "./ContactForm.module.css";


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
  

const ContactForm = () =>{

    const dispatch = useDispatch();
    const fielId = useId();
    
    const handleSabmit = (values, actions) =>{

        const addContactPromise = dispatch(addContact(values)).unwrap();

        toast.promise(
        addContactPromise,
            {
                loading: 'Adding contact...',
                success: 'The contact was successfully created!',
                error: 'Failed to add contact',
            }
            );

        addContactPromise
        .then(() => {
            actions.resetForm();
        })
        .catch((err) => {
            console.error('Error adding contact:', err);
        });
    };
            
    
    return(
        <Formik initialValues={{
            name: "", 
            number: ""}} 
            validationSchema={ContactSchema}
            onSubmit={handleSabmit}>
            <Form className={css.form}> 
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
                
                <button className={css.formBtn} type='submit'>Add Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm;