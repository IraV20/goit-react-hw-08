import css from "./App.module.css"
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";

import { Layout } from "../layout/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/authOperation";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/contactsPage/ContactsPage'));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
    
  return (
    <div className={css.app}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} /> } />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />}/>} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> }/>}/>
        </Routes>
      </Layout>
      
    </div>)
}

export default App;
