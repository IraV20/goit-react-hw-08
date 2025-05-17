import css from "./ContactsPage.module.css";
import ContactForm  from "../../components/contactForm/ContactForm";
import SearchBox  from "../../components/searchBox/SearchBox";
import ContactList from "../../components/contactList/ContactList"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectLoading } from "../../redux/contacts/contactsSelectors";
import { selectIsRefreshing } from "../../redux/auth/authSelectors";

export default function ContactsPage() {
  const isRefreshing = useSelector(selectIsRefreshing)
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return isRefreshing ? <div>Refreshing user...</div> : (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Toaster position="top-right" toastOptions={{
        className: '',
        style: {
          background: '#F5FFFA',
          color: 'currentColor',
        },
      }}
        containerStyle={{
          position: 'absolute',
          top: '72px',
          right: '186px',
          zIndex: 1000,
        }}reverseOrder={false} />
      <ContactForm/>
      <SearchBox />
      <div>{isLoading && <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}</div>
      <ContactList/>
    </div>
  )
}