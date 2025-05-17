import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';


import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/authOperation";

const ContactSchema = Yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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

        <Button className={css.formBtn} type="submit" variant="contained" sx={{margin: '0 auto'}}>
          Log in
        </Button>
      </Form>
    </Formik>
    )
}