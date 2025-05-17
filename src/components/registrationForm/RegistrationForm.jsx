import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";

import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperation";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .email('must be a valid email')
    .required("Required"),
   password:  Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const RegisterForm = () => {

  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      dispatch(register(values))
        .unwrap()
        .then(data => console.log(data))
        .catch(err => console.log(err));
      actions.resetForm();
    }
    
    return (
        <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formElem}>
          <label htmlFor="name">Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id="name"
          ></Field>
          <ErrorMessage name="name" component="span" className={css.err} />
        </div>
        <div className={css.formElem}>
          <label htmlFor="email">Email</label>
          <Field
            className={css.formInput}
            type="email"
            name="email"
            id="email"
          ></Field>
          <ErrorMessage name="email" component="span" className={css.err} />
        </div>
        <div className={css.formElem}>
          <label htmlFor="password">Password</label>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            id="password"
          ></Field>
          <ErrorMessage name="password" component="span" className={css.err} />
        </div>

        <Button variant='contained' className={css.formBtn} type="submit" sx={{margin: '0 auto'}}>
          Register
        </Button>
      </Form>
    </Formik>
    )
}